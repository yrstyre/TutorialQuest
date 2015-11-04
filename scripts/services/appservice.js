define(['knockout', 'viewmodels/Tutorial', 'services/routerService', 'services/tourService'], function (ko, Tutorial, routerService, tourService) {
	'use strict';

	var app = {};

	app.start = function () {
		var vm = new Tutorial();
		var pageId;

		routerService.start(vm);
		ko.applyBindings(vm);
	}

	return app;
});