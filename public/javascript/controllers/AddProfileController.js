(function() {
  "use strict";
  angular.module('app')
  .controller('AddProfileController', AddProfileController);
  function AddProfileController(UserFactory, $state, $stateParams) {
    var vm = this;
    vm. newProfile = {};
    vm.profile = {};
    vm.status = UserFactory.status;

//     vm.getProfile = function() {
//     UserFactory.getUserProfile(vm.status._id).then(function(res){
//   			vm.user = res;
// });
// }; vm.getProfile();
    // Add Profile
    vm.addProfile = function(){
      console.log('hi ADD');
    UserFactory.addProfile(vm.profile, vm.status._id).then(function(res){
      vm.newProfile = res;
      vm.newProfile = {};
      $state.go('Profile');
    });
  };
// vm.showProfile = function(id) {
//     UserFactory.showProfile(vm.profile.id).then(function(res){
//     vm.profile = res
//   })
// };
// vm.showProfile();

  }
})();
