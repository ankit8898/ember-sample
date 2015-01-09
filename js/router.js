Todos.Router.map(function(){
  this.resource('todos',{path: '/'});
  //this.route('todos');
});


Todos.TodosRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('todo');
  }
});

