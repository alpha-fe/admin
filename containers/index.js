    var Vue = require('vue');
    var HeaderContainer = require('./HeaderContainer');
    var BodyContainer = require('./BodyContainer')
    var app = new Vue({
        el: '#app',
        template: '<div><HeaderContainer /><BodyContainer/></div>',
        // template:'<NavContainer/>',
        data: function() {
            return {
            }
        },
        components: {
            HeaderContainer: HeaderContainer,
            BodyContainer:BodyContainer
        }
    })
