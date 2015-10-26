(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	function HomeController() {
		var vm = this;
		vm.title = 'Welcome to TraveLaws!';
		// vm.head = 'An app for .';
		vm.showLaws = true;

		vm.States = [
			{state: 'ALABAMA', laws: {gen : 'http://www.alabama.gov/',traf : 'http://www.dmv.org/al-alabama/safety-laws.php',gun : 'http://www.ago.state.al.us/Page-Alabama-Weapon-Law',bus : 'http://www.alabama.gov/category/business'}},
			{state: 'ALASKA', laws: {gen : 'http://alaska.gov/',traf : 'http://www.dmv.org/ak-alaska/automotive-law/vehicle-code.php',gun : 'http://dps.alaska.gov/statewide/permitslicensing/concealedhandguns.aspx',bus : 'http://alaska.gov/businesshome.html'}},
			{state: 'ARIZONA', laws: {gen : 'https://az.gov/',traf : 'http://www.dmv.org/az-arizona/automotive-law/vehicle-code.php',gun : 'http://www.azdps.gov/services/concealed_weapons/',bus : 'https://az.gov/work/business'}},
			{state: 'ARKANSAS', laws: {gen : 'http://www.arkansas.gov/',traf : 'http://www.ghsa.org/html/stateinfo/bystate/ar.html',gun : 'http://asp.arkansas.gov/services-and-programs/detail/concealed-handgun-licensing',bus : 'http://www.arkansas.gov/business/'}},
			{state: 'CALIFORNIA', laws: {gen : 'http://www.ca.gov',traf : 'https://www.dmv.ca.gov/portal/dmv',gun : 'https://oag.ca.gov/firearms',bus : 'http://business.ca.gov/'}}
];

for (var i = 0; i < vm.States.length; i++) {
	for(var prop in vm.States[i]){
		console.log(vm.States[i][prop]);
    	for(var prop2 in vm.States[i][prop]){
				console.log(vm.States[i][prop][prop2]);
		}
	}
}



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
