var m = require('mithril')

// var Contact = function(data) {
//     data = data || {}
//     this.id = m.prop(data.id)
//     this.name = m.prop(data.name)
//     this.email = m.prop(data.email)
// }
// Contact.list = function(data) {
//     return m.request({method: "GET", url: "/api/contact", data: data})
// }
// Contact.save = function(data) {
//     return m.request({method: "POST", url: "/api/contact", data: data})
// }
var Users = module.exports = {}

Users.model = function(data) {
  data = data || {}
  this.username = m.prop(data.username);
  this.password = m.prop(data.password);
}

Users.fetch = function (user, pass) {
    return m.request({ method: 'POST', url: 'http://pet-shop.api.mks.io/signin', data: user})
}

Users.signup = function (user, pass) {
    return m.request({ method: 'POST', url: 'http://pet-shop.api.mks.io/signup', data: user})
}

