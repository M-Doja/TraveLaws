(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	function HomeController() {
		var vm = this;
		vm.title = 'Welcome to TraveLaws';
		// vm.head = 'An app for .';
		vm.showLaws = true;

		vm.States = [
			{state: 'ALABAMA', laws: {gen : 'http://www.alabama.gov/',traf : 'http://www.dmv.org/al-alabama/safety-laws.php',gun : 'http://www.ago.state.al.us/Page-Alabama-Weapon-Law',bus : 'http://www.alabama.gov/category/business'}},
			{state: 'ALASKA', laws: {gen : 'http://alaska.gov/',traf : 'http://www.dmv.org/ak-alaska/automotive-law/vehicle-code.php',gun : 'http://dps.alaska.gov/statewide/permitslicensing/concealedhandguns.aspx',bus : 'http://alaska.gov/businesshome.html'}},
			{state: 'ARIZONA', laws: {gen : 'https://az.gov/',traf : 'http://www.dmv.org/az-arizona/automotive-law/vehicle-code.php',gun : 'http://www.azdps.gov/services/concealed_weapons/',bus : 'https://az.gov/work/business'}},
			{state: 'ARKANSAS', laws: {gen : 'http://www.arkansas.gov/',traf : 'http://www.ghsa.org/html/stateinfo/bystate/ar.html',gun : 'http://asp.arkansas.gov/services-and-programs/detail/concealed-handgun-licensing',bus : 'http://www.arkansas.gov/business/'}},
			{state: 'CALIFORNIA', laws: {gen : 'http://www.ca.gov',traf : 'https://www.dmv.ca.gov/portal/dmv',gun : 'https://oag.ca.gov/firearms',bus : 'http://business.ca.gov/'}},
			{state: 'COLORADO', laws: {gen: 'https://www.colorado.gov/', traf: 'http://www.ghsa.org/html/stateinfo/bystate/co.html', gun: 'https://www.colorado.gov/pacific/csp/colorado-gun-laws', bus: 'https://www.colorado.gov/business-resources'}},
			{state: 'CONNECTICUT', laws: {gen: 'http://portal.ct.gov/', traf: 'http://portal.ct.gov/driving/?TaxId=249', gun: 'http://www.ct.gov/despp/cwp/view.asp?a=4213&q=494614', bus: 'http://portal.ct.gov/business/?TaxId=118'}},
  		{state: 'DELAWARE', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'FLORIDA', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'GEORGIA', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'HAWAII', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'IDAHO', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'ILLINOIS', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'INDIANA', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'IOWA', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
  		{state: 'KANSAS', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'KENTUCKY', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'LOUISIANA', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'MAINE', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'MARYLAND', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'MASSACHUSETTS', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'MICHIGAN', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
  		{state: 'MINNESOTA', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'MISSISSIPPI', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'MISSOURI', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'MONTANA', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'NEBRASKA', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'NEVADA', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'NEW HAMPSHIRE', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
	   	{state: 'NEW JERSEY', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'NEW MEXICO', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'NEW YORK', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'NORTH CAROLINA', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'NORTH DAKOTA', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'OHIO', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'OKLAHOMA', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
    	{state: 'OREGON', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'PENNSYLVANIA', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'RHODE ISLAND', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'SOUTH CAROLINA', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'SOUTH DAKOTA', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'TENNESSEE', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'TEXAS', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'UTAH', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
      {state: 'VERMONT', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'VIRGINIA', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'WASHINGTON', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'WEST_VIRGINIA', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'WISCONSIN', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			{state: 'WYOMING', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}}
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
