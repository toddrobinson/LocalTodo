/**
 * [MainController for todo application]
 * @param  {string} 'MainController'  [Name of controller]
 * @param  {} ['$scope'         [Scope dependency]
 * @return {}
 */
app.controller('MainController', ['$scope', function($scope){
  $scope.title = "LOCAL TO-DO";
  /**
   * Setting the todo object if it exists in localStorage
   * Otherwise, putting an example to-do.
   * If there are no to-dos, but item exists, no example to-do, becauase it
   * isn't the first visit.
   * $scope.todo object that contains an array $scope.todo.list that contains
   * the to-dos
   */
  if (!localStorage.getItem('todos')) {
        $scope.todos = {};
        $scope.todos.list = [];
        $scope.todos.list.push("Example to-do!");
        $scope.taskToAdd = '';
      }
  else {
      $scope.todos = JSON.parse(localStorage.getItem('todos'));
  }
  /**
   * [Takes to-do from text field, adds it to scope variable, calls save list function]
   * @return {} []
   */
  $scope.addTodo = function() {
    var task = $scope.taskToAdd;
    //Todo can't be blank, and can't already be in array
    if (task && $scope.todos.list.indexOf(task) < 0) {
      $scope.todos.list.push(task);
      if ($scope.saveList()) {
          $scope.addTodoForm.$setPristine();
          $scope.taskToAdd = '';
        }
    }
    else {
      alert("Task blank or duplicate.");
    }

  };

  /**
   * [Deletes todo from scope variable, calls save list function]
   * @param  {todo in array} todo
   */
  $scope.deleteTodo = function(todo) {
      var pos = $scope.todos.list.indexOf(todo);
      $scope.todos.list.splice(pos,1);
      $scope.saveList();
  };

  /**
   * Save the to-do list from scope variable.
   * Saves into localStorage as JSON
   * @return boolean true
   */
  $scope.saveList = function() {
      var todoString = JSON.stringify($scope.todos);
      localStorage.setItem("todos", todoString);
      return true;
  };

}]);
