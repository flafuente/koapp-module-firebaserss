(function() {
  'use strict';

  angular
    .module('firebaserss', [])
    .controller('FirebaserssController', loadFunction);

  loadFunction.$inject = ['$scope', 'structureService', '$location','fireService'];

  function loadFunction($scope, structureService, $location,fireService) {
    //Register upper level modules
    structureService.registerModule($location, $scope, 'firebaserss');
    fireService.setFirebaseSource($scope.firebaserss.modulescope.src);
    $scope.firebaserss.modulescope.items = fireService.getData();

    $scope.goToLink = function(data){
      window.open(data, '_system');
    }

  }

}());
