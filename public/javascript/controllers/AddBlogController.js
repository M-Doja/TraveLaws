(function() {
  "use strict";
  angular.module('app')
  .controller('AddBlogController', AddBlogController);
  function AddBlogController(HomeFactory, $state) {
    var vm = this;
    vm.blog = {};

    vm.PostBlog = function(){
      console.log(vm.blog);
      HomeFactory.postBlog(vm.blog).then(function(){
        $state.go('Home');
      });
    };


  }
})();
