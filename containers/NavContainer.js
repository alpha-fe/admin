    var Vue = require('vue');
    var NavBar = require('../pages/NavBar/NavBar');


    module.exports = Vue.component('NavContainer', {
        template: '<div><NavBar/></div>',
        components: {
            NavBar: NavBar
        }
    });
