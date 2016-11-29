// var Vue = require('vue');
import Vue from 'vue';
const getUi = (txt) => {
  return txt * 2;
};
module.exports = Vue.component('ui-page', {
    template: '<div>{{ message }}<button v-on:click="handleClick">BUTTON</button></div>',
    data(){
      return {
        message:'这是ES6 按时打 xDDDcfgv发第三方'
      }
    },
    created(){
      console.log(this);
    },
    methods:{
      handleClick(){
        console.log('1233346')
      }
    },
    components:{

    },
    computed:{

    }
});
