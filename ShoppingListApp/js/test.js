var app = new Vue({
  el: '#app',
  data: {
    name: '',
    lists: []
  },
  methods: {
    AddFood: function() {
      if (this.name === '') {
        return;
      }
      let food = {
        item: this.name,
        amount: 1,
        in_cart: false
      }
      this.lists.push(food)
      this.name = ''
    },
    DeleteFood: function(index) {
      this.lists.splice(index, 1);
    }
  }
})