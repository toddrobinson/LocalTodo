app.controller('MainController', ['$scope', function($scope){
  $scope.title = "Local To-do.";
  if (!localStorage.getItem('todos')) {
        $scope.todos = [];
        $scope.todos.push("Example todo!");
      }
  else {
      $scope.todos = localStorage.getItem('todos').split(',');
  }
  $scope.addTodo = function() {
    var taskInput = $('input').filter("#taskEntry");
    var task = $(taskInput).val();
    $(taskInput).val("");

    $scope.todos.push(task);
    $scope.saveList();
    //alert(Object.keys($scope.todos).length);
  };

  $scope.deleteTodo = function(todo) {
      var pos = $scope.todos.indexOf(todo);
      $scope.todos.splice(pos,1);
      $scope.todos.forEach(function (e,i,a) {console.log(e);});
      $scope.saveList();
  };

  $scope.saveList = function() {
      var todoString = $scope.todos.toString();
      console.log(todoString);
      localStorage.setItem("todos", todoString);
  };
}]);
