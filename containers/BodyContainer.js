var Vue = require('vue');
var LeftNav = require('./LeftNavContainer');
var MainContainer = require('./MainContainer');

module.exports = Vue.component('body-container',{
  template:'<div class="row"><LeftNav/><MainContainer/></div>',
  methods:{

  },
  components:{
    LeftNav:LeftNav,
    MainContainer:MainContainer
  },
  computed:{

  }
});
