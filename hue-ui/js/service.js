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
        postJSON: function() {
            var req = {
                method: 'PUT',
                url: 'http://192.168.1.102/api/ceb443411ac286f16012a5c25fcc5d7/lights/2/state',
                headers: {
                    'Content-Type': undefined
                },
                data: {
                    "hue": 70000,
                    "on": true,
                    "bri": 0
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
        }
    }
});
