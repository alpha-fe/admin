var Vue = require('vue');
module.exports = Vue.component('left-nav-page', {
    template: __inline('./index.html'),
    data() {

      return {
        
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components: {},
    computed: {}
});
