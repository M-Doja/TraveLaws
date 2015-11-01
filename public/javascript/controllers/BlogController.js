(function() {
  'use strict';
  angular.module('app')
  .controller('BlogController', BlogController);
  function BlogController($state, $stateParams, HomeFactory){
    var vm = this;
    vm.blog = {};
    vm.posts = [];
    vm.posts.push(vm.blog);
  	vm.edittedBlog = {};

    if(localStorage.oneBlog){
      vm.oneBlog = JSON.parse(localStorage.oneBlog);
      console.log(vm.oneBlog);
      localStorage.removeItem('oneBlog');
    }
    vm.ShowBlogs = function() {
      console.log('show blog');
    HomeFactory.getAllBlogs(vm.blog).then(function(res){

      // -----------USE TO GET ORDERED LIST OF BLOGS BY DATE-----------------------------------
      // vm.allquestions = res.map(function (item) {
      //     item.createdDate = new Date(item.createdDate);
      //     item.dateInMilliseconds = item.createdDate.getTime();
      //     return item;
      //   }).sort(function (a, b) {
      //     return b.dateInMilliseconds - a.dateInMilliseconds;
      //   });
      //   console.log(vm.allquestions);
      // });
      //-----------------------------------------------
      console.log(res);
      vm.blog = res;
    });
  };
  vm.ShowBlogs();
  vm.getBlogById = function(oneBlog){
    localStorage.setItem("oneBlog", JSON.stringify(oneBlog));
    $state.go('BlogPage',{id: oneBlog._id});
  };
  vm.getCopy = function(blog) {
  					return angular.copy(blog);
  			};

          // ADD A BLOG
  // vm.PostBlog = function(){
  //   console.log(vm.blog);
  //   HomeFactory.postBlog(vm.blog).then(function(res){
  //     $state.go('Blog');
  //   });
  // };

  vm.editBlog = function(blogId, blog){
			//Pass blog ID and editted blog info as one object to HomeFactory edit function
			HomeFactory.EditBlog({IDofBlogToEdit: blogId, edittedBlog: blog}).then(function(res){
				console.log(blog);
        vm.oneBlog = blog;
				console.log(vm.oneBlog);
				console.log('Made it back');
				vm.edittedBlog = null;
				$state.go('Blog');
			});
  			};
    vm.deleteBlog = function(){
      // vm.posts = [];
      console.log();
				HomeFactory.deleteBlog(vm.oneBlog._id).then(function(){
        vm.blog.splice(vm.blog.indexOf(vm.oneBlog),1);
        $state.go('Blog');
				});
			};



  }
})();
