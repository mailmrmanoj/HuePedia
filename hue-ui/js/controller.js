//(function(angular) {
//    'use strict';
//
//    function MyController(AnnyangService,jsonService, $scope) {
//        var vm = this;
//        jsonService.getjson().then(function(d) {
//            console.log("bigctrl" + d);
//            vm.avengers = d[0].acteurs;
//            $scope.loading =false;
//        });
//        vm.init = function() {
//            vm.clearResults();
//
//            AnnyangService.addCommand('*allSpeech', function(allSpeech) {
//                console.debug(allSpeech);
//                vm.addResult(allSpeech);
//            });
//
//            AnnyangService.start();
//        };
//
//        vm.addResult = function(result) {
//            vm.results.push({
//                content: result,
//                date: new Date()
//            });
//        };
//
//        vm.clearResults = function() {
//            vm.results = [];
//        };
//
//        vm.init();
//    }
//
//    angular.module('myApp')
//        .controller('MyController', MyController);
//
//}(window.angular));

app.controller('MainCtrl', function ($scope, AnnyangService, jsonService) {
    $scope.name = 'World';
    $scope.loading = true;
    //jsonService.getjson().then(function (d) {
    //    console.log("bigctrl" + d);
    //    $scope.avengers = d[0].acteurs;
    //    $scope.loading = false;
    //});

    $scope.init = function () {
        $scope.clearResults();

        AnnyangService.addCommand('*allSpeech', function (allSpeech) {
            console.debug(allSpeech);
            $scope.addResult(allSpeech);
        });

        AnnyangService.start();
    };
    function igniteHello(id) {
        jsonService.postJSON(id).then(function (data) {
        })
    }

    function checkKeywords(result) {
        //if (result == "hello") {
            igniteHello(2);
       // }
    }

    $scope.startTimer=function(){
        setInterval(function(){ alert("Hello"); }, 3000);
    }

    $scope.addResult = function (result) {
        $scope.results.push({
            content: result,
            date: new Date()
        });
        checkKeywords(result);

    };

    $scope.clearResults = function () {
        $scope.results = [];
    };

    $scope.init();


});



