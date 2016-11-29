var Vue = require('vue');
var MainPage = require('../pages/MainPage/MainPage');

module.exports = Vue.component('main-container', {
    template: '<MainPage/>',
    components: {
      MainPage:MainPage
    }
});
