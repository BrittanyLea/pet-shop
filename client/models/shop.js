var m = require('mithril')


var Shop = module.exports = {}

Shop.fetch = function () {
  return m.request({ method: 'GET', url: 'http://pet-shop.api.mks.io/shops/1' })
}

