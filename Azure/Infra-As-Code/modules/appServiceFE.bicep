param environment string
param location string
param serverFarmName string
param applicationName string
//param workspaceId string
//param appInsightsInstrumentationKey string

/*
{
  name: 'APPINSIGHTS_INSTRUMENTATIONKEY'
  value: appInsightsInstrumentationKey
}
*/
resource appService 'Microsoft.Web/sites@2022-09-01' = {
  name: 'app-fe-${applicationName}-${environment}'
  location: location
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    serverFarmId: resourceId('Microsoft.Web/serverfarms', serverFarmName)
    siteConfig: {
      appSettings: [
        {
          name: 'WEBSITE_RUN_FROM_PACKAGE'
          value: '1'
        }
      ]
    }
  }
}

/*
resource diagnosticSettings 'Microsoft.Insights/diagnosticSettings@2021-05-01-preview' = {
  name: 'AppServiceDiagnosticSettings'
  scope: appService
  properties: {
    workspaceId: workspaceId
    logs: [
      {
        category: 'AppServiceHTTPLogs'
        enabled: true
      }
      {
        category: 'AppServiceConsoleLogs'
        enabled: true
      }
      {
        category: 'AppServiceAppLogs'
        enabled: true
      }
      {
        category: 'AppServiceAuditLogs'
        enabled: true
      }
      {
        category: 'AppServiceIPSecAuditLogs'
        enabled: true
      }
      {
        category: 'AppServicePlatformLogs'
        enabled: true
      }
    ]
    metrics: []
  }
}
*/

output principalId string = appService.identity.principalId
