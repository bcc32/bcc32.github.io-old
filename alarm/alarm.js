(function() {
  angular.module('alarmApp', [])
  .controller('timeController', ['$scope', '$interval',
    function($scope, $interval) {
      $scope.time = new Date();
      $scope.alarmTime = new Date(0);
      $scope.alarmSet = false;

      var int = $interval(function() {
        $scope.time = new Date();

        if ($scope.alarmSet && $scope.time.getTime() >= $scope.alarmTime.getTime()) {
          if (!$('#alarm').attr('src')) {
            $('#alarm').attr('src', 'alarm2.mp3');
          }
        } else if (!$scope.alarmSet) {
          $('#alarm').attr('src', '');
        }
      }, 500);

      $scope.setAlarmTime = function() {
        $scope.alarmTime = new Date();
        $scope.alarmTime.setHours($scope.hour);
        $scope.alarmTime.setMinutes($scope.minute);
        $scope.alarmTime.setSeconds(0);
        if ($scope.alarmTime.getTime() <= $scope.time.getTime()) {
          $scope.alarmTime.setDate($scope.alarmTime.getDate() + 1);
        }
        $scope.alarmSet = !$scope.alarmSet;
      }

      $scope.range = function(a, b) {
        var res = [];
        for (var i = a; i <= b; i++) {
          res.push(i);
        }
        return res;
      };

      $scope.padZero = function(n) {
        if (n < 10) {
          return '0' + n;
        } else {
          return n;
        }
      }
  }]);
})();
