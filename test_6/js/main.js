(function(){
  'use strict';

  let likeComponent = Vue.extend({
    template: "<button @click='countUp'>{{message}}{{count}}</button>",
    //配列でキーを受け取りますとしている。
    // props: ["message"],
    //propsにデフォルト値や型を指定するには、オブジェクトとして書く必要あり。
    props: {
      message:{
        type: String,
        default: "Like"
      }
    },
    // dataをコンポーネント定義の中で使用する場合は、Functionタイプのみ受け付ける
    data: function(){
    //設定したプロパティをreturnする時は{}で囲む必要あり。  
      return{
        count: 0
      }
    },
    methods: {
      countUp: function(){
      //プロパティはthisで取得できる
        this.count++;
        this.$emit("increment");
      }
    }
  })

  const app = new Vue({
    el: "#app",
    // componentsの登録。#appに対して、このcomponentを使うよ、と宣言。
    components: {
      "like-component": likeComponent
    },
    data: {
      total: 0
    },
    methods: {
      incrementTotal: function(){
        this.total++;
      }
    }
  })
})()