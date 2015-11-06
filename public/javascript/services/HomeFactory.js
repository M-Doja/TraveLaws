(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);
	function HomeFactory($http, $q) {

		var o = {};
		var blog = {};


		// POSTING BLOG IN DATABASE
o.postBlog = function(blog) {
	console.log(blog);
	console.log('on route to post blog');
	var q = $q.defer();
	$http.post('/api/blog/', blog).then(function(res){
		q.resolve(res.data);
	});
	return q.promise;
};

				// GETTING ALL BLOGS
o.getAllBlogs = function(){
	var q = $q.defer();
	$http.get('/api/blog').then(function(res) {
		q.resolve(res.data);
	});
	return q.promise;
};

o.EditBlog = function(id){
			var q= $q.defer();
			$http.put('/api/blog', id).then(function(res){
			console.log("at Factory");
				q.resolve(res.data);
			});
			o.getAllBlogs();
			return q.promise;
		};
		o.deleteBlog = function(id){
					var q = $q.defer();
					$http.delete('/api/blog/' + id).then(function(){
						q.resolve();
					});
					return q.promise;
				};

				// o.postCom = function(comment){
				// 	var q = $q.defer();
				// 	// console.log(storyId);
				// 	console.log(comment);
				// 	console.log('post here');
				// 	$http.post('/api/blog/', comment).then(function(res){
				// 		q.resolve(res.data);
				// 		console.log("I'm posted");
				// 	});
				// 	return q.promise;
				// };
				//



		return o;
	}
})();
