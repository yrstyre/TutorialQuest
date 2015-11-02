define(['knockout', 'viewmodels/Tutorial', 'services/routerService'], function (ko, Tutorial, routerService) {
	'use strict';

	var app = {};

	app.start = function () {
		var vm = new Tutorial();
		routerService.start(vm);
		ko.applyBindings(vm);
	}

	return app;
});