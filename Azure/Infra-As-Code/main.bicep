@allowed([
  'dev'
  'stg'
  'prod'
])
param environment string
param applicationName string
param location string
param resourceGroupExists bool
param failOverLocation string

targetScope = 'subscription'

// var emailAddresses = [ 'popovic.k.nikola@gmail.com' ]

resource createResourceGroup 'Microsoft.Resources/resourceGroups@2023-07-01' = if (!resourceGroupExists) {
  name: 'rg-${applicationName}-${environment}'
  location: location
}

module swa 'modules/swa.bicep' =  {
  scope: createResourceGroup
  name: 'aspDeployment'
  params: {
    environment: environment
    location: 'eastus2'
    applicationName: applicationName
    sku: 'Free'
  }
}

/*
module appServicePlan './modules/appServicePlan.bicep' = {
  scope: createResourceGroup
  name: 'aspDeployment'
  params: {
    environment: environment
    location: location == 'canadaeast' ? failOverLocation : location
    applicationName: applicationName
    isOnLinux: true
    emailAddresses: emailAddresses
  }
}

module logAnalytics './modules/logAnalytics.bicep' = {
  scope: createResourceGroup
  name: 'logAnalyticsDeployment'
  params: {
    environment: environment
    location: location
    applicationName: applicationName
  }
}

module appInsights './modules/appInsights.bicep' = {
  scope: createResourceGroup
  name: 'apiAppInsightDeployment'
  params: {
    environment: environment
    location: location
    logAnalyticsId: logAnalytics.outputs.id
    applicationName: applicationName
  }
  dependsOn: [
    logAnalytics
  ]
}
*/

/*
If you enable LogAnalytics make sure to add them to the dependency array and add the InstrumentationKey
 appInsights.outputs.instrumentationKey
 logAnalytics.outputs.id


module appServiceFrontend './modules/appServiceFE.bicep' = {
  scope: createResourceGroup
  name: 'appServiceFrontendDeployment'
  params: {
    environment: environment
    location: location
    applicationName: applicationName
    serverFarmName: appServicePlan.outputs.serverFarmName
  }
  dependsOn: [
    appServicePlan
  ]
}
*/
