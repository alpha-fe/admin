var Vue = require('vue');
var UiPage = require('../pages/UiPage/UiPage.js');

module.exports = Vue.component('ui-container', {
    template: '<div> <UiPage/> </div>',
    components: {
      UiPage:UiPage
    }
});
