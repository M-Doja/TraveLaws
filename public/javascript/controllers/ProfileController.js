(function() {
  'ues strict';
  angular.module('app')
  .controller('ProfileController', ProfileController);
  function ProfileController($state, UserFactory) {
    var vm = this;
    vm.statevisit = {};

    // Display everything on single Profile
  console.log('welcome to my profile')
vm.showProfile = function(){
  UserFactory.showProfile(vm.profile._id).Then(function(res){
    vm.profile = res;
  });
};


  }
})();
