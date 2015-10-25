(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = [];

	function HomeController() {
		var vm = this;
		vm.title = 'Welcome to TraveLaws!';
		vm.head = 'An app for travellers to know the laws of the land.';

		vm.States = [{
			ALABAMA: {gen: '', traf: '', gun: '', bus: ''},
			ALASKA: {gen: '', traf: '', gun: '', bus: ''},
			ARIZONA: {gen: '', traf: '', gun: '', bus: ''},
			ARKANSAS: {gen: '', traf: '', gun: '', bus: ''},
			CALIFORNIA: {gen: '', traf: '', gun: '', bus: ''},
			COLORADO: {gen: '', traf: '', gun: '', bus: ''},
			CONNECTICUT: {gen: '', traf: '', gun: '', bus: ''},
  		DELAWARE: {gen: '', traf: '', gun: '', bus: ''},
			FLORIDA: {gen: '', traf: '', gun: '', bus: ''},
			GEORGIA: {gen: '', traf: '', gun: '', bus: ''},
			HAWAII: {gen: '', traf: '', gun: '', bus: ''},
			IDAHO: {gen: '', traf: '', gun: '', bus: ''},
			ILLINOIS: {gen: '', traf: '', gun: '', bus: ''},
			INDIANA: {gen: '', traf: '', gun: '', bus: ''},
			IOWA: {gen: '', traf: '', gun: '', bus: ''},
  		KANSAS: {gen: '', traf: '', gun: '', bus: ''},
			KENTUCKY: {gen: '', traf: '', gun: '', bus: ''},
			LOUISIANA: {gen: '', traf: '', gun: '', bus: ''},
			MAINE: {gen: '', traf: '', gun: '', bus: ''},
			MARYLAND: {gen: '', traf: '', gun: '', bus: ''},
			MASSACHUSETTS: {gen: '', traf: '', gun: '', bus: ''},
			MICHIGAN: {gen: '', traf: '', gun: '', bus: ''},
  		MINNESOTA: {gen: '', traf: '', gun: '', bus: ''},
			MISSISSIPPI: {gen: '', traf: '', gun: '', bus: ''},
			MISSOURI: {gen: '', traf: '', gun: '', bus: ''},
			MONTANA: {gen: '', traf: '', gun: '', bus: ''},
			NEBRASKA: {gen: '', traf: '', gun: '', bus: ''},
			NEVADA: {gen: '', traf: '', gun: '', bus: ''},
			NEW_HAMPSHIRE: {gen: '', traf: '', gun: '', bus: ''},
   		NEW_JERSEY: {gen: '', traf: '', gun: '', bus: ''},
			NEW_MEXICO: {gen: '', traf: '', gun: '', bus: ''},
			NEW_YORK: {gen: '', traf: '', gun: '', bus: ''},
			NORTH_CAROLINA: {gen: '', traf: '', gun: '', bus: ''},
			NORTH_DAKOTA: {gen: '', traf: '', gun: '', bus: ''},
			OHIO: {gen: '', traf: '', gun: '', bus: ''},
			OKLAHOMA: {gen: '', traf: '', gun: '', bus: ''},
    	OREGON: {gen: '', traf: '', gun: '', bus: ''},
			PENNSYLVANIA: {gen: '', traf: '', gun: '', bus: ''},
			RHODE_ISLAND: {gen: '', traf: '', gun: '', bus: ''},
			SOUTH_CAROLINA: {gen: '', traf: '', gun: '', bus: ''},
			SOUTH_DAKOTA: {gen: '', traf: '', gun: '', bus: ''},
			TENNESSEE: {gen: '', traf: '', gun: '', bus: ''},
			TEXAS: {gen: '', traf: '', gun: '', bus: ''},
			UTAH: {gen: '', traf: '', gun: '', bus: ''},
      VERMONT: {gen: '', traf: '', gun: '', bus: ''},
			VIRGINIA: {gen: '', traf: '', gun: '', bus: ''},
			WASHINGTON: {gen: '', traf: '', gun: '', bus: ''},
			WEST_VIRGINIA: {gen: '', traf: '', gun: '', bus: ''},
			WISCONSIN: {gen: '', traf: '', gun: '', bus: ''},
			WYOMING: {gen: '', traf: '', gun: '', bus: ''}
}];



	}
})();
