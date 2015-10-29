(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial'])
	.config(Config);
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Login',{
			url: '/',
			templateUrl: 'views/LoginReg.html'
		}).state('Home',{
			url: '/home',
			templateUrl: 'views/Home.html'
		}).state('Profile',{
			url: '/profile',
			templateUrl: 'views/Profile.html'
		}).state('Blog',{
			url: '/blog',
			templateUrl: 'views/Blog.html'
		}).state('EditProfile',{
			url: '/edit_profile/:id',
			templateUrl: 'views/EditProfile.html'
		}).state('EditBlog',{
			url: '/edit_blog/:id',
			templateUrl: 'views/EditBlog.html'
		});
		$urlRouterProvider.otherwise('/');
	}
})();
