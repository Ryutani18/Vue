function Shuffle(array) {
  for(let i=array.length-1; i>0; i--) {
    let k= Math.floor(Math.random() * (i+1))
    let tmp = array[k]
    array[k] = array[i]
    array[i] = tmp
  }
  return array
}


var app = new Vue({ 
  el: '#app',
  data: {
    message: "Hello World!"
  },
  methods: {
    Random: function() {
      this.message = Shuffle(this.message.split('')).join('')
    }
  }
});