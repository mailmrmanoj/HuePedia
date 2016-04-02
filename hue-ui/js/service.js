/**
 * Created by manoj on 4/2/2016.
 */
app.factory('jsonService', function($http) {
    return {
        getjson: function() {
            //alert("ok");
            // $http returns a promise, which has a then function, which also returns a promise
            var promise = $http.get('https://api.mongolab.com/api/1/databases/lagrossetete/collections/avengers?apiKey=j0PIJH2HbfakfRo1ELKkX0ShST6_F78A').then(function(response) {
                // The then function here is an opportunity to modify the response
                console.log("big" + response);
                // The return value gets picked up by the then in the controller.
                //
                // je ne sais pas ou il pioche le terme data
                // peut etre une expression de Angular
                //
                return response.data;
            });
            // Return the promise to the controller
            return promise;
        },
        postJSON: function(id,hue) {
            var req = {
                method: 'PUT',
                url: 'http://192.168.1.102/api/ceb443411ac286f16012a5c25fcc5d7/lights/'+id+'/state',
                headers: {
                    'Content-Type': undefined
                },
                data: {
                    "hue": hue,
                    "on": true,
                    "bri": 254,
                    "sat":254
                }
            }
            // $http returns a promise, which has a then function, which also returns a promise
            var helloPromise = $http(req).then(function(response) {
                // The then function here is an opportunity to modify the response
                console.log("big" + response);
                // The return value gets picked up by the then in the controller.
                //
                // je ne sais pas ou il pioche le terme data
                // peut etre une expression de Angular
                //
                return response.data;
            });
            // Return the promise to the controller
            return helloPromise;
        },
        setSixScore1: function(hue,state,bri) {
            var req = {
                method: 'PUT',
                url: 'http://192.168.1.102/api/ceb443411ac286f16012a5c25fcc5d7/lights/1/state',
                headers: {
                    'Content-Type': undefined
                },
                data: {
                    "hue": hue,
                    "on": state,
                    "bri": bri
                }
            }
            // $http returns a promise, which has a then function, which also returns a promise
            var helloPromise = $http(req).then(function(response) {
                // The then function here is an opportunity to modify the response
                console.log("big" + response);
                // The return value gets picked up by the then in the controller.
                //
                // je ne sais pas ou il pioche le terme data
                // peut etre une expression de Angular
                //
                return response.data;
            });
            // Return the promise to the controller
            return helloPromise;
        },
        setSixScore2: function(hue,state,bri) {
            var req2 = {
                method: 'PUT',
                url: 'http://192.168.1.102/api/ceb443411ac286f16012a5c25fcc5d7/lights/2/state',
                headers: {
                    'Content-Type': undefined
                },
                data: {
                    "hue": hue,
                    "on": state,
                    "bri": bri
                }
            }
            // $http returns a promise, which has a then function, which also returns a promise
            var helloPromise2 = $http(req2).then(function(response) {
                // The then function here is an opportunity to modify the response
                console.log("big" + response);
                // The return value gets picked up by the then in the controller.
                //
                // je ne sais pas ou il pioche le terme data
                // peut etre une expression de Angular
                //
                return response.data;
            });
            // Return the promise to the controller
            return helloPromise2;
        },
        setSixScore3: function(hue,state,bri) {
            var req2 = {
                method: 'PUT',
                url: 'http://192.168.1.102/api/ceb443411ac286f16012a5c25fcc5d7/lights/3/state',
                headers: {
                    'Content-Type': undefined
                },
                data: {
                    "hue": hue,
                    "on": state,
                    "bri": bri
                }
            }
            // $http returns a promise, which has a then function, which also returns a promise
            var helloPromise3 = $http(req2).then(function(response) {
                // The then function here is an opportunity to modify the response
                console.log("big" + response);
                // The return value gets picked up by the then in the controller.
                //
                // je ne sais pas ou il pioche le terme data
                // peut etre une expression de Angular
                //
                return response.data;
            });
            // Return the promise to the controller
            return helloPromise3;
        }
    }
});
