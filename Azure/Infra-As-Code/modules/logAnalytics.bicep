param environment string
param location string
param applicationName string
param retentionInDays int = 90
param dailyQuotaGb int = 0

resource logAnalytics 'Microsoft.OperationalInsights/workspaces@2021-12-01-preview' = {
  name: 'log-${applicationName}-${environment}'
  location: location
  properties: union({
      retentionInDays: retentionInDays
    }, dailyQuotaGb > 0 ? {
      workspaceCapping: {
        dailyQuotaGb: dailyQuotaGb
      }
    } : {})
}

output id string = logAnalytics.id
