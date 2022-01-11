var app = new Vue({ 
  el: '#app',
  data: {
    message: "Hello World!"
  },
  methods: {
    Hanten: function() {
      this.message = this.message
      .split('')
      .reverse()
      .join('');
    }
  }
});
