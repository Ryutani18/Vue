var app = new Vue({ 
  el: '#app',
  data: {
    number: 0,
    x: 0,
    y: 0
  },
  methods: {
    CountUp: function() {
      this.number += 1;
    },
    Reset: function() {
      this.number = 0;
    },
    MousePosition: function(event, num) {
      this.x = event.screenX / num;
      this.y = event.screenY / num;
    }
  }
});
