param environment string
param location string
param applicationName string
param isOnLinux bool = false
param emailAddresses array

var environmentSettings = {
  dev: {
    sku: {
      name: 'F1'
      capacity: 1
    }
  }
  staging: {
    sku: {
      name: 'B1'
      capacity: 1
    }
  }
  prod: {
    sku: {
      name: 'S1'
      capacity: '1'
    }
  }
}

resource appServicePlan 'Microsoft.Web/serverfarms@2022-09-01' = {
  name: 'plan-${applicationName}-${environment}'
  location: location
  sku: environmentSettings[environment].sku
  properties: {
    reserved: isOnLinux
    // zoneRedundant: environment == 'prod' // This require a Premium SKU and a mimimum of 3 instances (triple the cost). Be sure about this one before activating it !
  }
}

resource autoScale 'Microsoft.Insights/autoscalesettings@2022-10-01' = if (environment == 'prod') {
  name: 'autoscale-${applicationName}-${environment}'
  location: location
  properties: {
    profiles: [
      {
        name: 'Auto scale condition'
        capacity: {
          default: '1'
          maximum: '5'
          minimum: '1'
        }
        rules: [
          {
            metricTrigger: {
              metricName: 'CpuPercentage'
              metricResourceUri: resourceId('Microsoft.Web/serverfarms', appServicePlan.name)
              operator: 'GreaterThanOrEqual'
              statistic: 'Count'
              threshold: 85
              timeAggregation: 'Average'
              timeGrain: '00:05:00'
              timeWindow: '00:05:00'
            }
            scaleAction: {
              cooldown: '00:05:00'
              direction: 'Increase'
              type: 'ChangeCount'
              value: '1'
            }
          }
          {
            metricTrigger: {
              metricName: 'CpuPercentage'
              metricResourceUri: resourceId('Microsoft.Web/serverfarms', appServicePlan.name)
              operator: 'LessThan'
              statistic: 'Count'
              threshold: 40
              timeAggregation: 'Average'
              timeGrain: '00:05:00'
              timeWindow: '00:05:00'
            }
            scaleAction: {
              cooldown: '00:05:00'
              direction: 'Decrease'
              type: 'ChangeCount'
              value: '1'
            }
          }
        ]
      }
    ]
    enabled: true
    targetResourceUri: appServicePlan.id
    notifications: [ {
        email: {
          customEmails: emailAddresses
          sendToSubscriptionAdministrator: false
          sendToSubscriptionCoAdministrators: false
        }
        operation: 'Scale'
      } ]
    predictiveAutoscalePolicy: {
      scaleMode: 'Disabled'
    }
  }
}

output serverFarmName string = appServicePlan.name
