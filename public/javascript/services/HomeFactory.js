(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);
	function HomeFactory($http, $q) {

		var o = {};
		var blog = {};


		// ADD A NEW PROFILE
o.createProfile = function(user){
console.log('Sending to router');
var q = $q.defer();
$http.post('/api/user', user).then(function(res){
	setToken(res.data); //puts the token on localStorage
	setUser();
	var user = o.getUser();
	o.status.username = user.username;
	o.status._id = user._id;
	q.resolve(res.data);
});
return q.promise;
};

o.postBlog = function(blog) {
	console.log(blog);
	console.log('on route to post blog');
	var q = $q.defer();
	$http.post('/api/blog/', blog).then(function(res){
		q.resolve(res.data);
	});
	return q.promise;
};




		return o;
	}
})();
