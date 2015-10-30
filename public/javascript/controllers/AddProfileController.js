(function() {
  "use strict";
  angular.module('app')
  .controller('AddProfileController', AddProfileController);
  function AddProfileController(UserFactory, $state, $stateParams) {
    var vm = this;
    vm.profile = {};
    vm.status = UserFactory.status;


    UserFactory.getUserProfile(vm.status._id).then(function(res){
  			vm.user = res;
});
    // Add Profile
    vm.addProfile = function(){
      console.log('hi ADD');
    UserFactory.addProfile(vm.profile).then(function(res){
      vm.profile = res;
      vm.profile = {};
      $state.go('Profile');
    });
  };
vm.showProfile = function(id) {
  UserFactory.showProfile(vm.profile.id).then(function(res){
    vm.profile = res
  })
};
vm.showProfile();

  }
})();
