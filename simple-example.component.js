(function () {
    'use strict';

    angular.module('app').component('simpleExample', {
        controllerAs: 'vm',
        controller: function () {
            var vm = this;

            vm.name = {
                first: '',
                last: ''
            };

            vm.fullName = '';

            vm.submit = function () {
                console.log(vm.name);
                vm.fullName = vm.name.first + ' ' + vm.name.last;
                console.log(vm.name.first, vm.name.helloStateast, vm.fullName);
            }
        },
        templateUrl:'simple-example-component.html'
    });
})();