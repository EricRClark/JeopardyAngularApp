var _ = require('underscore');
angular
    .module('trebangular')
    //   .config('AppService', function($http, $location)
    .controller('HomeController', function($scope, $http, $q, $location, $rootScope, apiQuestsService) {
            console.log('HELLO');
            $rootScope.score = 0;
            //With help from Nate:

            // apiQuestsService.getCats()
            //     .then(function(catof1) {
            //         console.log(catof1);
            //     });

            apiQuestsService.sixThenShits()
                .then(function(categories) {
                        console.log('stuff', categories);
                        $scope.categories = categories;
                        $scope.categories.forEach(function(el) {
                                if (el.data.clues_count > 5) {
                                    el.data.clues = _.first((el.data.clues), 5);
                            }
                            for (i = 0; i < 5; i++) {
                                el.data.clues[i].value = 200 * (i + 1);
                            }
                        })
                    // $scope.questions = getQAC(categories);
                    // window.glob = $scope.questions;
                })

        // function getQAC(data) {
        //     var dataArr = [];
        //     for (var i = 0; i < 5; i++) {
        //         dataArr.push(data[1].data.clues[i]);
        //     }
        //     console.log(dataArr, "shit");
        //     return dataArr
        // }
    });

 // .controller('boardController', function($scope, apiQuestsService,$routeParams, AppService){

      // $scope.question = '';
      // $scope.value = '';
      // $scope.answer = '';
      //
      //
      // $scope.displayBoardCtrl = function(cats) {
      //         console.log("Boom!");
      //         apiQuestsService.displayBoardCtrl(cats)
      //           .then(function(cats) {
      //             console.log(cats);
      //             $scope.cats = apiQuestsService.sixThenShits(data.clues);
      //
      //             $scope.questions = $scope.data.clues.question;
      //             $scope.value = $scope.data.clues.value;
      //             $scope.answer = $scope.data.clues.answer;
      //           })
      //    }

// })
