define(['underscore', 'knockout'], function (_, ko) {
	'use strict';

	function Tutorial () {
		this.componentName = ko.observable();
        this.params = ko.observable();
	}

	Tutorial.prototype = _.extend(Tutorial.prototype, {
		// startQuest: function () {
		// 	console.log("load component");
		// }
	});

	return Tutorial;
});