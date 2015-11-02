(function() {
  "use strict";
  angular.module('app')
  .controller('AddProfileController', AddProfileController);
  function AddProfileController(UserFactory, $state, $stateParams) {
    var vm = this;
    vm. newProfile = {};
    vm.profile = {};
    vm.status = UserFactory.status;

//     console.log('add pro  ctrl');
//     UserFactory.getUserProfile(vm.status._id).then(function(res){
//   			vm.user = res;
// });
    // Add Profile
    // ----------------------------------------
  vm.addProfile = function(){
    console.log('hi ADD');
  UserFactory.addProfile(vm.profile).then(function(res){
    vm.newProfile = res;
    vm.newProfile = {};
    $state.go('Profile');
  });
};
  // --------------------------------------------------------

  

  }
})();
