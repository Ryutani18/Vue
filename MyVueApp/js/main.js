const app = new Vue({ 
  el: '#app',
  data: {
    new_task: "",
    todos: []
  },
  methods: {
    AddTask: function() {
      if(this.new_task == "") {
        return;
      }
      let todo = {
        item: this.new_task,
        isDone: false,
        due_date: new Date().toISOString().substr(0, 10),
        like: false
      };
      this.todos.push(todo)
      this.new_task = ""
    },
    DeleteTask: function(index) {
      this.todos.splice(index, 1);
    },
    DateTime: function(e) {
      if(e.due_date < new Date().toISOString().substr(0, 10)) {
        return true;
      } else {
        return false;
      }
    },
    Sort_by_date: function() {
      this.todos.sort(function(a, b) {
        if (a.due_date < b.due_date) {
            return -1;
        } else {
            return 1;
        }
     });
    },
    Like: function(e) {
      e.like = !e.like
    }
  }
});