    var Vue = require('vue');

    // var HeaderContainer = require('./HeaderContainer');
    // var BodyContainer = require('./BodyContainer')

    var HeaderContainer = require('../pages/HeaderPage');
    var LeftNav = require('../pages/LeftNavPage');
    var MainContainer = require('../pages/MainPage');


    module.exports = Vue.component('app-container', {
        template: '<div><HeaderContainer/><LeftNav/><MainContainer/></div>',
        components: {
            HeaderContainer: HeaderContainer,
            LeftNav: LeftNav,
            MainContainer:MainContainer
        }
    });
