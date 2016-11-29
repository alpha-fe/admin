    var Vue = require('vue');
    var VueRouter = require('vuerouter');
    var routes = require('../routes/routes.js');

    Vue.use(VueRouter);

    var router = new VueRouter({
        routes: routes,
        mode: 'history',
        linkActiveClass: 'active'
    });

    new Vue({
        router: router
    }).$mount('#app');
