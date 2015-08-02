angular.module('tdlApp', [])
	.controller('TDLController', function() {
		var tdList = this;
		tdList.tdItems = [
			{name:'first', desc:'thing to do'},
			{name:'second', desc:'thing to do'},
			{name:'third', desc:'more to do'}
		];

		tdList.addItem = function () {
			console.log(tdList.name);
			tdList.tdItems.push({name:tdList.name, desc:tdList.desc});
			tdList.name = '';
			tdList.desc = '';
			
		};

		tdList.delItem = function (index) {
			console.log("d");
			tdList.tdItems.splice(index,1);
		};

	});