angular.module('todolist').controller('ListCtrl',function($scope){

	var vm = this;
	vm.showAll = true;
	vm.todoList = [];

	// Function to add todo to list
	vm.addToList = function(){
		if(vm.textData){
			vm.todoList.push({text:vm.textData,completed:false});
			vm.textData = null;
		}

	};

	// Function to remove todo to list
	vm.removeTODO = function(todo){
		vm.todoList = $.grep(vm.todoList, function(e){ 
			return e.text !== todo; 
		});
	};

	// Function to search todo to list
	vm.searchTODO = function(text){
		vm.todoList = $.grep(vm.todoList, function(e){ 
			return e.text === text; 
		});
	};

	// Function to handle enter key
	vm.eventHandler = function(event){
		if(event.keyCode === 13){
			vm.addToList();
		}
	};

	// Function to display completed todos
	vm.showCompleted = function(){
		vm.showCompleted = true;
		vm.showAll = false;
	};

	// Function to display uncompleted todos
	vm.showUnCompleted = function(){
		vm.showCompleted = false;
		vm.showAll = false;
	};
});