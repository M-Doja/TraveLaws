(function() {
  "use strict";
  angular.module('app')
  .controller('AddProfileController', AddProfileController);
  function AddProfileController(HomeFactory, $state) {
    var vm = this;
    vm.user = {};
    vm.status = UserFactory.status;

vm.AddProfile = function(){
  console.log('adding from controller')
HomeFactory.createProfile(vm.user).then(function(res){
  vm.user = res;
});
};



  }
})();
