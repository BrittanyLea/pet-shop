var m = require('mithril')


var Pets = module.exports = {}

Pets.model = function() {
  this.name = m.prop('name');
  this.species = m.prop('species');
  this.image = m.prop('imageUrl');
  this.likes = m.prop('likes');
}

Pets.fetch = function () {
    return m.request({ method: 'GET', url: 'http://pet-shop.api.mks.io/shops/1/pets'})
}

Pets.like = function (petId, apiToken) {
    return m.request({ method: 'POST', url: 'http://pet-shop.api.mks.io/shops/' + petId + '/like',
    data: { apiToken: apiToken}})
}
// Pets.view = function() {
//   return m('div', [
//     attrs.name.map(function(name) {
//       return m('p', name)
//       })
//     ])
// };
