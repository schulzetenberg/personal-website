app.controller('beautifyController', function($scope, $http) {
    $scope.list = [];
    $scope.text = 'hello';
    $scope.submit = function() {
      if ($scope.text) {
          var data = {text: $scope.text};
          var config = { headers : {'Content-Type': 'application/json'} };
          $http.post('../api/beautify', data,config)
          .then(function() {
              alert("DONE");
          })  
          .catch(function() {
          }); 
      }
    };
});
