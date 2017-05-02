var app = angular.module("myApp", ['ngRoute']).controller('myController', myController);
app.config(['$myControll', function($myControll) {
        $myControll.allowGlobals();
    }]);
