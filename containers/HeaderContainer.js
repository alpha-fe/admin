    var Vue = require('vue');
    var HeaderPage = require('../pages/HeaderPage/HeaderPage');


    module.exports = Vue.component('header-container', {
        template: '<div><HeaderPage/></div>',
        components: {
            HeaderPage: HeaderPage
        }
    });
