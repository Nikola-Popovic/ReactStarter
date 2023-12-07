param applicationName string
@allowed([ 'centralus', 'eastus2', 'eastasia', 'westeurope', 'westus2' ])
param location string
@allowed([ 'Free', 'Standard' ])
param sku string = 'Standard'
param environment string

resource swa 'Microsoft.Web/staticSites@2021-01-15' = {
  name: 'swa-fe-${applicationName}-${environment}'
  location: location
  tags: null
  properties: {}
  sku: {
    name: sku
    tier: sku
  }
}
