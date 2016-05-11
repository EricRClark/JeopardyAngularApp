angular
    .module('trebangular')
    .directive('boardReader', function() {
        return {
            templateUrl: '../templates/board-reader.html',
            restrict: 'E',
            scope: {
                question: '=',

            },

            controller: function($scope, $rootScope) {
                $scope.addScore = function(input, answer, value) {
                    if (input === answer) {
                        $rootScope.score += value
                    } else {
                            $rootScope.score -= value
                        }
                    };
                    $scope.disableBTN = function(id) {
                        $('button.' + id).prop('disabled', true);
                            $('button.' + id).toggle();
                            $('#' + id).modal('hide')

                    }
                $scope.ques = function(id){
                    $("div." + id).toggle();
                }
            }
        }
    })
