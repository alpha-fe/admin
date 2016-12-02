var Vue = require('vue');
module.exports = Vue.component('header-page', {
    template: __inline('./index.html'),
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    components: {},
    computed: {}
});
