var theaterApp = angular.module("theaterApp", []);


theaterApp.factory('authInterceptor', function ($rootScope, $q, $window) {
	  return {
	    request: function (config) {
	      config.headers = config.headers || {};
	      if ($window.sessionStorage.token) {
	        config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
	      }
	      return config;
	    },
	    responseError: function (rejection) {
	      if (rejection.status === 401) {
	        // handle the case where the user is not authenticated
	      }
	      return $q.reject(rejection);
	    }
	  };
	});


//Do configuration and routing here
theaterApp.config(function($routeProvider, $httpProvider){
    console.log($routeProvider);
    $routeProvider
        .when("/",{
            controller: "MoviesCtrl",
            templateUrl: "js/views/moviesView.html"
        })
        .when("/User", {
            controller: "UserCtrl",
            templateUrl: "js/views/userView.html"
        })
		.when("/Stock", {
			controller: "StockCtrl",
			templateUrl: "js/views/stockView.html"
		});

    $routeProvider.otherwise({"redirectTo": "/"});  //.otherwise("/"); //does not work

    //$httpProvider.interceptors.push('authInterceptor');
});

//this is used to parse the profile
function url_base64_decode(str) {
  var output = str.replace('-', '+').replace('_', '/');
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += '==';
      break;
    case 3:
      output += '=';
      break;
    default:
      throw 'Illegal base64url string!';
  }
  return window.atob(output); //polifyll https://github.com/davidchambers/Base64.js
}
