var app = new Vue({ 
  el: '#app',
  data: {
    new_task: '',
    todos: []
  },
  methods: {
    addTask: function() {
      if(this.new_task == "") {
        return;
      }
      var todo = this.new_task
      this.todos.push(todo);
      this.new_task = "";
    }
  }
});

