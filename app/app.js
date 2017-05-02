var app = angular.module("myApp", ['ngRoute']);
app.config(['$myController', function($myController) {
        $myController.allowGlobals();
    }]);
