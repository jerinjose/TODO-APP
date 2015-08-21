angular.module('todolist', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('todolist').config(function($stateProvider) {

    $stateProvider.state('list', {
        url: '/list',
        templateUrl: 'todolist/partial/list/list.html',
        controller:'ListCtrl as view'
    });
    /* Add New States Above */

});

