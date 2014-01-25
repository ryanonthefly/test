var app = angular.module('plunker', []);

app.factory('calc', function() {
    return {
        add : function(i1, i2){
            return i1 + i2;
        },
        substract : function(i1, i2){
            return i1 - i2;
        },
        books: [
           { title: "Magician", author: "Raymond E. Feist" },
           { title: "The Hobbit", author: "J.R.R Tolkien" }
        ]
    }
});

app.service('testService', function(){
    this.sayHello = function(text){
        return "Service says \"Hello " + text + "\"";
    };

    this.sayWow = function(text){
        return "This is wow.." + text;
    };        
    
    this.calculateResult = function(arr){
        var min = 99999;
        var max = 0;
        var sum = 0;
        for(i = 0, len = arr.length; i < len; i++) {
            min = Math.min(min, arr[i]);
            max = Math.max(max, arr[i]);
            sum += arr[i];
        }

        var result = {
            min : min,
            max : max,
            sum : sum
        };

        return result;
    };
});

app.directive('myDirective', function (calc) {
    return {
      restrict: 'C',
      scope: {
        options: '='
      },
      link: function (scope) {
        scope.$watch('options.reload', function (val) {
          if (val) {
            alert('reloading');
            alert(calc.add(2, 3));
            scope.options.reload = false
          }
        })
        scope.$watch('options.refresh', function (val) {
          if (val) {
            alert('refreshing')
            scope.options.refresh = false
          }
        })
      }
    }
  })
  .controller('MyCtrl', function ($scope, calc, testService) {
    $scope.opts = {
      reload: false,
      refresh: false
    }
    
    $scope.reload = function () {
      alert(testService.sayWow('a'));

      var result = calc.substract(10, 2);
      alert(result);

      alert(calc.books[0].title);

      $scope.opts.reload = true
    }
    
    $scope.refresh = function () {
      var result = testService.calculateResult([1, 3, 5, 7, 9]);
      alert(result.min + " " + result.max + " " + result.sum);
      $scope.opts.refresh = true
    }
  })

//First, the object creator
function GamePlayer(name,totalScore,gamesPlayed) {
    //should return an object with three keys:
    // name
    // totalScore
    // gamesPlayed

    this.name =  name;
    this.totalScore = totalScore;
    this.gamesPlayed = gamesPlayed;
}

var player1 = new GamePlayer(a,b,c);

function makeGamePlayer(name,totalScore,gamesPlayed) {
    //should return an object with three keys:
    // name
    // totalScore
    // gamesPlayed

    var obj = {
        name:  name,
        totalScore: totalScore,
        gamesPlayed: gamesPlayed
    };
    return obj;
}

var player1 = makeGamePlayer(a,b,c);
