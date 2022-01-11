(function() {
  'use strict';

  let likeComponent = Vue.extend({
    template: "<button @click='countUp'>{{message}}{{count}}</button>",
    props: {
      message: {
        type: String
      }
    },
    data: function(){
      return {
        count: 0
      }
    },
    methods: {
      countUp: function(){
        this.count++;
        this.$emit("click");
      }
    }
  });
  
  const app = new Vue({
    el: "#app",
    components: {
      'like': likeComponent
    },
    data: {
      total: 0
    },
    methods: {
      incrementTotal: function(){
        this.total++;
      }
    }
  });

})()