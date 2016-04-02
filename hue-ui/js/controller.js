
app.controller('MainCtrl', function ($scope,$timeout, $interval,$filter,AnnyangService, jsonService) {
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
    function igniteHello() {
        jsonService.postJSON(1).then(function (data) {
        })
    }

    function checkKeywords(result) {
        if (result == "Diwali") {
          //  igniteHello();
            $scope.StartTimer(true);
        }
        if (result == "Sleep") {
            //  igniteHello();
            $scope.StartTimer(false);
        }
    }
    $scope.setColours=function(id){
        var hue
        if(id==1){
            hue=65535;
            jsonService.postJSON(1,hue).then(function (data) {
            })
            jsonService.postJSON(2,hue).then(function (data) {
            })
            jsonService.postJSON(3,hue).then(function (data) {
            })
        }else if(id==2){
            hue=25500;
            jsonService.postJSON(1,hue).then(function (data) {
            })
            jsonService.postJSON(2,hue).then(function (data) {
            })
            jsonService.postJSON(3,hue).then(function (data) {
            })
        }else if(id==3){
            hue=46920;
            jsonService.postJSON(1,hue).then(function (data) {
            })
            jsonService.postJSON(2,hue).then(function (data) {
            })
            jsonService.postJSON(3,hue).then(function (data) {
            })
        }else if(id==4){
            $scope.StartTimer(true);
        }


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
    //timer
    $scope.Timer = null;

    //Timer start function.
    $scope.StartTimer = function (flag) {
        //Set the Timer start message.
        $scope.Message = "Timer started. ";
        var hue=5000;
        var bri=70000;
        //Initialize the Timer to run every 1000 milliseconds i.e. one second.
        $scope.Timer = $interval(function () {
            //Display the current time.

            hue+=5000;
            bri+=5000;

            jsonService.setSixScore1(hue,flag,bri).then(function (data) {

            })
           jsonService.setSixScore2(hue,flag,bri).then(function (data) {

           })
           jsonService.setSixScore3(hue,flag,bri).then(function (data) {

           })


            var time = $filter('date')(new Date(), 'HH:mm:ss');
            $scope.Message = "Timer Ticked. " + time;
        }, 1000);
    };

    //Timer stop function.
    $scope.StopTimer = function () {

        //Set the Timer stop message.
        $scope.Message = "Timer stopped.";

        //Cancel the Timer.
        if (angular.isDefined($scope.Timer)) {
            $interval.cancel($scope.Timer);
        }
    };

});



