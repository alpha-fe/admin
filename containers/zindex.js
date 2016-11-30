    var Vue = require('vue');
    var VueRouter = require('vuerouter');
    var Vuex = require('vuex');
    // var
    var routes = require('../routes/routes.js');

    Vue.use(VueRouter);
    Vue.use(Vuex);
    // 
    // var store = new Vuex.store({
    //   state:{
    //     a:1,
    //     b:2
    //   },
    //   mutations:{
    //     a:function(){
    //
    //     },
    //     b:function(){
    //
    //     }
    //   }
    // });

    var router = new VueRouter({
        routes: routes,
        // mode: 'history',
        linkActiveClass: 'active'
    });

    new Vue({
        router: router
    }).$mount('#app');
