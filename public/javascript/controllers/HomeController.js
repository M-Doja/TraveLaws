(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	function HomeController() {
		var vm = this;
		vm.title = 'Welcome to TraveLaws!';
		vm.head = 'An app for travellers to know the laws of the land.';

		vm.States = [
			{state: 'ALABAMA', laws: {gen : 'WWW.ca.gov',traf : 'WWWWWW',gun : 'WWWWW',bus : 'WW'}},
			{state: 'ALASKA', laws: {gen : 'WWW.ca.gov',traf : 'WWWWWW',gun : 'WWWWW',bus : 'WW'}},
			{state: 'ARIZONA', laws: {gen : 'WWW.ca.gov',traf : 'WWWWWW',gun : 'WWWWW',bus : 'WW'}},
			{state: 'ARKANSAS', laws: {gen : 'WWW.ca.gov',traf : 'WWWWWW',gun : 'WWWWW',bus : 'WW'}},
			{state: 'CALIFORNIA', laws: {gen : 'WWW.ca.gov',traf : 'WWWWWW',gun : 'WWWWW',bus : 'WW'}}
];
			// state:  console.log(vm.AL.traf);
	}
})();
			//
			// state: COLORADO, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: CONNECTICUT, laws: {gen: '', traf: '', gun: '', bus: ''},
  		// state: DELAWARE, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: FLORIDA, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: GEORGIA, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: HAWAII, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: IDAHO, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: ILLINOIS, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: INDIANA, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: IOWA, laws: {gen: '', traf: '', gun: '', bus: ''},
  		// state: KANSAS, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: KENTUCKY, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: LOUISIANA, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: MAINE, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: MARYLAND, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: MASSACHUSETTS, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: MICHIGAN, laws: {gen: '', traf: '', gun: '', bus: ''},
  		// state: MINNESOTA, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: MISSISSIPPI, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: MISSOURI, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: MONTANA, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: NEBRASKA, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: NEVADA, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: NEW_HAMPSHIRE, laws: {gen: '', traf: '', gun: '', bus: ''},
   	// state: 	NEW_JERSEY, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: NEW_MEXICO, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: NEW_YORK, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: NORTH_CAROLINA, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: NORTH_DAKOTA, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: OHIO, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: OKLAHOMA, laws: {gen: '', traf: '', gun: '', bus: ''},
    	// state: OREGON, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: PENNSYLVANIA, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: RHODE_ISLAND, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: SOUTH_CAROLINA, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: SOUTH_DAKOTA, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: TENNESSEE, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: TEXAS, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: UTAH, laws: {gen: '', traf: '', gun: '', bus: ''},
      // state: VERMONT, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: VIRGINIA, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: WASHINGTON, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: WEST_VIRGINIA, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: WISCONSIN, laws: {gen: '', traf: '', gun: '', bus: ''},
			// state: WYOMING, laws: {gen: '', traf: '', gun: '', bus: ''}
