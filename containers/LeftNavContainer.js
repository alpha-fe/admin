var Vue = require('vue');
var LeftNav = require('../pages/LeftNavPage')
module.exports = Vue.component('left-nav-container',{
  template:'<LeftNav/>',
  components:{
    LeftNav:LeftNav
  }
})
