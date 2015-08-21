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

	// Function to handle enter key
	vm.eventHandler = function(event){
		if(event.keyCode === 13){
			vm.addToList();
		}
	};

});