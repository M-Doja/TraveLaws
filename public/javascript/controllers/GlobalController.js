(function() {
  "use strict";
  angular.module('app')
  .controller('GlobalController', GlobalController);
  function GlobalController(UserFactory, $state) {
    var vm = this;
    vm.isLogin = true; //switch between the login and register view on the login_register.html page
    vm.user = {};
    // vm.logBtn = true;
    vm.status = UserFactory.status;

    vm.logout = function() {
      UserFactory.logout();
      $state.go('Login');
    };

    vm.registerUser = function() {
      UserFactory.registerUser(vm.user).then(function() {
        $state.go('Home');
        // vm.logBtn = false;
      });
    };

    vm.loginUser = function() {
      UserFactory.loginUser(vm.user).then(function() {
        $state.go('Home');
        vm.user = {};
      });
    };
  }
})();
