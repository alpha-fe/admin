    var Vue = require('vue');
    var NavContainer = require('./NavContainer.js');
    var app = new Vue({
        el: '#app',
        template: '<div>{{message}} <NavContainer></NavContainer></div>',
        // template:'<NavContainer/>',
        data: function() {
            return {
                message: 'NavContainer'
            }
        },
        components: {
            NavContainer: NavContainer
        }
    })
