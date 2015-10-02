var m = require('mithril')
var Shop = require('../models/shop')
var Pets = require('../models/pets')
var Users = require('../models/users')


var PetShopWindow = module.exports = {}

PetShopWindow.controller = function () {
  var ctrl = this
  ctrl.shop = m.prop(null)
  ctrl.pets = m.prop([new Pets.model()])
  ctrl.users = m.prop(new Users.model())
  Shop.fetch().then(ctrl.shop)
  Pets.fetch().then(ctrl.pets)
  Users.fetch().then(ctrl.users)
  //Users.login().then(ctrl.users)
}

PetShopWindow.view = function (ctrl) {
     console.log(ctrl.pets());
 // (ctrl.pets());
  return m('.pet-shop', [
    m('h1', "Welcome to " + ctrl.shop().name),
    userLogin(ctrl, ctrl.users()),
    // m("input[placeholder=UserName]"), // bind to username on user model
    // m("input[placeholder=Password]"), // bind to password on user model
    // m("button[type=button]", "Sign Up"),
    // m("button[type=button]", "Sign In"), //on click event ==> sign up
    ctrl.pets().map(function(pet, index){
      return m('.pet', [
        m('p', "Pet Name: " + pet.name),
        m('p', "Type of Species: " + pet.species),
        m('p', "Number of Likes: " + pet.likes.length),
        m("button[type=button]", "Like"),
        m('img', {"src": pet.imageUrl, "height": "300px", "width": "200px"})
      ])
    })
  ])
}

function userLogin (ctrl, user) {
  // var user = ctrl.users()

  return m("form", [
    m("label", "UserName"),
       m("input", {onchange: m.withAttr("value", user.username), value: user.username()}),

       m("label", "Password"),
       m("input", {onchange: m.withAttr("value", user.password), value: user.password()}),

       m("button[type=button]", {onclick: Users.signup.bind(this, ctrl.users())}, "Sign Up"),
       // petLikes(ctrl, ctrl.pets());
       m("button[type=button]", {onclick: Users.fetch.bind(this, ctrl.users())}, "Sign In")
  ])
}

// function petLikes (ctrl, pet) {

//   ctrl.pets().map(function(pet, index){
//     return(m'.pet', [
//       m("button[type=button]", "Like")
//     ])
// }


//helper function to create login that is called in controller

    //   Pets.map( PetShopWindow.bind(null, ctrl) )
    //   ])
// var petShopPets = ctrl.pets();

// function petsInfo (pets) {
//   return petShopPets.map(function(index) {
//     return m('.pets', [
//       m('p', "Pet Name: " + petShopPets[index].name),
//       m('p', "Type of Species: " + petShopPets[index].species),
//       m('img', {"src": petShopPets[index].imageUrl, "height": "300px", "width": "200px"}),
//       m('p', "Number of Likes: " + petShopPets[index].likes)
//     ])
//   })
// }




