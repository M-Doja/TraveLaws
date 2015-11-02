(function() {
  "use strict";
  angular.module('app')
  .controller('AddBlogController', AddBlogController);
  function AddBlogController(HomeFactory, $state) {
    var vm = this;
    vm.blog = {};
    // vm.status = UserFactory.status;
    vm.user ={};


    vm.PostBlog = function(){
      console.log(vm.blog);
      HomeFactory.postBlog(vm.blog).then(function(res){
        $state.go('Blog');
      });
    };




  }
})();
