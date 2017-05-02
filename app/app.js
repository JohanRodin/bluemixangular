var app = angular.module("myApp", ['ngRoute']).controller('myController', myController);
app.config(['$myController', function($myController) {
        $myController.allowGlobals();
    }]);
