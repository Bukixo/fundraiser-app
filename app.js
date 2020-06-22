
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

    myApp.controller("simpleExampleViewModel", function () {
        var vm = this;

        vm.name = {
            first: '',
            last: ''
        };

        vm.fullName = '';

        vm.submit = function() {
            console.log(vm.name);
            vm.fullName = vm.name.first + ' ' + vm.name.last;
            console.log(vm.name.first, vm.name.helloStateast, vm.fullName);
        }

        // $scope.getdetails = function () {
        
        //     $scope.result = "testing";

        //     $scope.name = {
        //         first: '',
        //         last: ''
        //     };
        // }

    // var vm = this;

    // vm.openModal = openModal;
    
    // function openModal(){
    //     console.log("something");
    // }
    });
    
})()




