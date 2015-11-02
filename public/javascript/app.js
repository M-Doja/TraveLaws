(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial', 'angular-carousel'])
	.config(Config);
	function Config($stateProvider, $urlRouterProvider, $httpProvider) {
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
		}).state('AddProfile',{
			url: '/add_profile',
			templateUrl: 'views/AddProfile.html'
		}).state('ProfilePage',{
			url: '/profile_page/:id',
			templateUrl: 'views/ProfilePage.html'
		}).state('EditBlog',{
			url: '/edit_blog/:id',
			templateUrl: 'views/EditBlog.html'
		}).state('AddBlog',{
			url: '/add_blog',
			templateUrl: 'views/AddBlog.html'
		}).state('BlogPage',{
			url: '/blog_page/:id',
			templateUrl: 'views/BlogPage.html'
		});
		$urlRouterProvider.otherwise('/');
		$httpProvider.interceptors.push('AuthInterceptor');

	}
})();
