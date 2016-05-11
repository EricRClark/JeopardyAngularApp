angular
    .module('trebangular')
    .service('apiQuestsService', 'CacheEngine',function($http, $q, $cacheFactory) {


    var cors = 'https://free-cors-server.herokuapp.com/any-request/';
    var jepUrl = 'http://jservice.io/api/category?id=';


//Nate's Help
function getCats(){
      var defer = $q.defer();
      var getRandom = Math.random() * 1300;
      $http.get(jepUrl + getRandom).then(function(data) {
        defer.resolve(data);
      })
      return defer.promise;
    }
//Nate's Help
    function sixThenShits() {
      return $q.all([getCats(),getCats(),getCats(),getCats(),getCats(),getCats()])
    }

    function getQAC() {
      return $http.get(cors + jepUrl)
    }

    return {
      getQAC: getQAC,
      sixThenShits: sixThenShits,
      getCats : getCats,
      $cacheFactory('jeopardyAPI')
}
    })
