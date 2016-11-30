// var Vue = require('vue');
import Vue from 'vue';
import axios from 'axios';
const getUi = (txt) => {
    return txt * 2;
};
let cacheMessage = '';
module.exports = Vue.component('ui-page', {
    template: '<div>{{ message }}<br/><a href="/#/chart">这是一个链接</a><button v-on:click="handleClick">BUTTON</button></div>',
    data() {
        return {
            message: '这是ES6 按时打 xDDDcfgv发第三方'
        }
    },
    created() {
      var self = this;
      if(cacheMessage){
        this.message = cacheMessage;
        return;
      }

        axios.get('/api/user', {
                params: {
                    id: 12345
                }
            })
            .then(function(response) {
                console.log(response);
                self.message = response.data.a;
                cacheMessage = self.message;

            })
            .catch(function(error) {
                console.log(error);
            });
    },
    beforeMount(){
      console.log(222);
    },
    methods: {
        handleClick() {
            console.log('1233346')
        }
    },
    components: {

    },
    computed: {

    }
});
