app.controller('beautifyController', function($scope, $http) {
  $scope.type = 'js';
  $scope.options = '{\n  "indent_size": 4,\n  "indent_char": " ",\n  "eol":"\\n",\n  "indent_level": 0,\n  "indent_with_tabs": false,\n  "preserve_newlines": true,\n  ' +
    '"max_preserve_newlines": 10,\n  "jslint_happy": false,\n  "space_after_anon_function": false,\n  "brace_style": "collapse",\n  "keep_array_indentation": false,' +
    '\n  "keep_function_indentation": false,\n  "space_before_conditional": true,\n  "break_chained_methods": false,\n  "eval_code": false,\n  "unescape_strings": false,\n  ' +
    '"wrap_line_length": 0,\n  "wrap_attributes": "auto",\n  "wrap_attributes_indent_size": 4,\n  "end_with_newline": false\n  }';

  $scope.submit = function() {
    if ($scope.text) {
      var data = {
        text: $scope.text,
        options: $scope.options,
        type: $scope.type
      };
      var config = { headers : {'Content-Type': 'application/json'} };
      $http.post('../api/beautify', data, config).then(function(response) {
        $scope.text = response.data;
      }).catch(function(err) {
        console.log(err);
      });
    }
  };

});
