define(['knockout', 'underscore'], function (ko, _) {
	'use strict';

	function Quest(params) {
		var params = params || {};
	}

	Quest.prototype = _.extend(Quest.prototype, {
		startQuest: function () {
			console.log("whah");
		}
	});

	return Quest;
});