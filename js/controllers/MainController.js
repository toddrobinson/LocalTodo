app.controller('MainController', ['$scope', function($scope){
  $scope.title = "Local To-do.";
  if (!localStorage.getItem('todos')) {
        $scope.todos = {};
        $scope.todos.list = [];
        $scope.todos.list.push("Example todo!");
      }
  else {
      $scope.todos = JSON.parse(localStorage.getItem('todos'));
  }
  $scope.addTodo = function() {
    var taskInput = $('input').filter("#taskEntry");
    var task = $(taskInput).val();
    $(taskInput).val("");

    $scope.todos.list.push(task);
    $scope.saveList();
    //alert(Object.keys($scope.todos).length);
  };

  $scope.deleteTodo = function(todo) {
      var pos = $scope.todos.list.indexOf(todo);
      $scope.todos.list.splice(pos,1);
      $scope.todos.list.forEach(function (e,i,a) {console.log(e);});
      $scope.saveList();
  };

  $scope.saveList = function() {
      var todoString = JSON.stringify($scope.todos);
      console.log(todoString);
      localStorage.setItem("todos", todoString);
  };
}]);
