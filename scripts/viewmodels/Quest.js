define(['knockout', 'underscore'], function (ko, _) {
	'use strict';

	function Quest(params) {
		var params = params || {};

		setTimeout(this.startHelpTour, 100);
	}

	Quest.prototype = _.extend(Quest.prototype, {
		startQuest: function () {
			
		},

		
	});

	return Quest;
});