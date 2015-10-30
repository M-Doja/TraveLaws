(function() {
  'use strict';
  angular.module('app')
  .controller('BlogController', BlogController);
  function BlogController($state, $stateParams, HomeFactory){
    var vm = this;
    vm.blog = {};
    vm.posts = [];
    vm.posts.push(vm.blog);

    if(localStorage.oneBlog){
      vm.oneBlog = JSON.parse(localStorage.oneBlog);
      console.log(vm.oneBlog);
      localStorage.removeItem('oneBlog');
    }

    // if(!$stateParams.id) $state.go('Home');
  	// 	HomeFactory.getBlogById($stateParams.id).then(function(res){
  	// 		console.log(res);
  	// 		vm.blog = res;
  	// 	});

    vm.ShowBlogs = function() {
      console.log('show blog');
    HomeFactory.getAllBlogs(vm.blog).then(function(res){
      console.log(res);
      vm.blog = res;
    });
  };
  vm.ShowBlogs();
  vm.getBlogById = function(oneBlog){

    localStorage.setItem("oneBlog", JSON.stringify(oneBlog));
    $state.go('BlogPage',{id: oneBlog._id});

  };


  }
})();
