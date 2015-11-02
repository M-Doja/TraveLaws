(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	function HomeController() {
		var vm = this;
		vm.title = 'Welcome to TraveLaws';
		// vm.head = 'An app for .';
		vm.showLaws = true;
http://www.netstate.com/states/symb/flags/images/ak_fi.gif
		vm.States = [
			{state: 'ALABAMA', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7Oe9a_v74czjDlKGcrwoohjrNmu4maIfbdb-Husk4_GPIt1ijg', laws: {gen : 'http://www.alabama.gov/',traf : 'http://www.dmv.org/al-alabama/safety-laws.php',gun : 'http://www.ago.state.al.us/Page-Alabama-Weapon-Law',bus : 'http://www.alabama.gov/category/business'}},
			{state: 'ALASKA', image: 'http://www.netstate.com/states/symb/flags/images/ak_fi.gif', laws: {gen : 'http://alaska.gov/',traf : 'http://www.dmv.org/ak-alaska/automotive-law/vehicle-code.php',gun : 'http://dps.alaska.gov/statewide/permitslicensing/concealedhandguns.aspx',bus : 'http://alaska.gov/businesshome.html'}},
			{state: 'ARIZONA', image: 'http://www.statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/large/public/Arizona_state_flag.png?itok=MgpWrqRw', laws: {gen : 'https://az.gov/',traf : 'http://www.dmv.org/az-arizona/automotive-law/vehicle-code.php',gun : 'http://www.azdps.gov/services/concealed_weapons/',bus : 'https://az.gov/work/business'}},
			{state: 'ARKANSAS', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arkansas.svg/2000px-Flag_of_Arkansas.svg.png', laws: {gen : 'http://www.arkansas.gov/',traf : 'http://www.ghsa.org/html/stateinfo/bystate/ar.html',gun : 'http://asp.arkansas.gov/services-and-programs/detail/concealed-handgun-licensing',bus : 'http://www.arkansas.gov/business/'}},
			{state: 'CALIFORNIA', image:'http://www.50states.com/flag/image/nunst0006.gif', laws: {gen : 'http://www.ca.gov',traf : 'https://www.dmv.ca.gov/portal/dmv',gun : 'https://oag.ca.gov/firearms',bus : 'http://business.ca.gov/'}},
			{state: 'COLORADO', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Flag_of_Colorado.svg/2000px-Flag_of_Colorado.svg.png',laws: {gen: 'https://www.colorado.gov/', traf: 'http://www.ghsa.org/html/stateinfo/bystate/co.html', gun: 'https://www.colorado.gov/pacific/csp/colorado-gun-laws', bus: 'https://www.colorado.gov/business-resources'}},
			{state: 'CONNECTICUT', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Connecticut.svg/2000px-Flag_of_Connecticut.svg.png', laws: {gen: 'http://portal.ct.gov/', traf: 'http://portal.ct.gov/driving/?TaxId=249', gun: 'http://www.ct.gov/despp/cwp/view.asp?a=4213&q=494614', bus: 'http://portal.ct.gov/business/?TaxId=118'}}
  		// {state: 'DELAWARE', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'FLORIDA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'GEORGIA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'HAWAII', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'IDAHO', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'ILLINOIS', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'INDIANA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'IOWA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
  		// {state: 'KANSAS', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'KENTUCKY', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'LOUISIANA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'MAINE', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'MARYLAND', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'MASSACHUSETTS', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'MICHIGAN', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
  		// {state: 'MINNESOTA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'MISSISSIPPI', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'MISSOURI', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'MONTANA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'NEBRASKA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'NEVADA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'NEW HAMPSHIRE', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			//  	{state: 'NEW JERSEY', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'NEW MEXICO', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'NEW YORK', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'NORTH CAROLINA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'NORTH DAKOTA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'OHIO', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'OKLAHOMA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
    	// {state: 'OREGON', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'PENNSYLVANIA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'RHODE ISLAND', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'SOUTH CAROLINA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'SOUTH DAKOTA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'TENNESSEE', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'TEXAS', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'UTAH', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
      // {state: 'VERMONT', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'VIRGINIA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'WASHINGTON', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'WEST_VIRGINIA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'WISCONSIN', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'WYOMING', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}}
];
//
// for (var i = 0; i < vm.States.length; i++) {
// 	for(var prop in vm.States[i]){
// 		// console.log(vm.States[i][prop]);
//     	for(var prop2 in vm.States[i][prop]){
// 				// console.log(vm.States[i][prop][prop2]);
// 		}
// 	}
// }



	}
})();
