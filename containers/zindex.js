    var Vue = require('vue');
    var VueRouter = require('vuerouter');
    var Vuex = require('vuex');
    var Element = require('element');
    // var
    var routes = require('../routes/routes.js');

    Vue.use(VueRouter);
    Vue.use(Vuex);

    Vue.use(Element);

    var router = new VueRouter({
        routes: routes,
        // mode: 'history',
        linkActiveClass: 'active'
    });

    new Vue({
        router: router
    }).$mount('#app');
