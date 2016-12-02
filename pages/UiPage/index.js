// var Vue = require('vue');
import Vue from 'vue';
import util from 'api';
const getUi = (txt) => {
    return txt * 2;
};
let api = util.api;
module.exports = Vue.component('ui-page', {
    template: '<div>{{ message }}<br/><a href="/#/chart">这是一个链接</a><button v-on:click="handleClick">BUTTON</button></div>',
    data() {
        return {
            message: '这是ES6 按时打 xDDDcfgv发第三方'
        }
    },
    created() {
        var self = this;
        console.log('created');
        // if (cacheMessage) {
        //     this.message = cacheMessage;
        //     return;
        // }
        api({
          method:'get',
          url:'/api/user',
          data:{
            id:11111
          },
          success:function(res){
            console.log('222222');
            self.message = res.data.a;
          },
          error:function(res){
            console.log('error');
          }
        })
        // axios({
        //     method: 'get',
        //     url: '/api/user',
        //     data: {
        //         firstName: 'Fred',
        //         lastName: 'Flintstone'
        //     }
        // }).then(function(res){
        //   self.message = res.data.a;
        //   console.log(res);
        // }).catch(function(error){
        //   console.log(222);
        //   console.log(error);
        // });

        // axios.get('/api/user', {
        //         params: {
        //             id: 12345
        //         }
        //     })
        //     .then(function(response) {
        //         console.log(response);
        //         self.message = response.data.a;
        //         cacheMessage = self.message;
        //
        //     })
        //     .catch(function(error) {
        //         console.log(error);
        //     });
    },
    beforeMount() {
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
