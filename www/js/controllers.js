'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('TodoCtrl', ['$scope', function($scope){
      
       $scope.todos = [
           {text:'Learn AngularJS', done: false},
           {text:'Make an App', done:false}
       ];
       
       $scope.addTodo = function(formTodoText){
         $scope.todos.push({text:formTodoText, done:false});
         $scope.formTodoText = '';
       };
       
       $scope.getTotalTodos = function(){
           return $scope.todos.length;
       };
       
       $scope.clearCompleted = function(){
           $scope.todos = _.filter($scope.todos, function(todo){
               return !todo.done;
           });
       };
  }]);
