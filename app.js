
(function () {

    'use strict'
    angular.module("App", ["main"]);

    var myApp = angular.module("main", ["ui.router"]);

    myApp.config(function($stateProvider) {
        var helloState = {
            name: "simpleExampleView",
            url: "/simpleExampleView",
            templateUrl: "simpleExampleView.html"
        }

        var aboutState = {
            name: "home",
            url: "/",
            template: ""
        }

        $stateProvider.state(helloState);
        $stateProvider.state(aboutState);
    });

    myApp.controller("simpleExampeViewModel", function () {
        var vm = this;

        vm.name = {
            first: '',
            last: ''
        };

        vm.fullName = '';

        vm.submit - function () {
            vm.fullName = vm.name.first + '' + vm.name.last;
        }


    });
})()




