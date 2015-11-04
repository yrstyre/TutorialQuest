define(['underscore', 'knockout', 'services/tourService'], function (_, ko, tourService) {
	'use strict';

	function Tutorial () {
		this.componentName = ko.observable();
        this.params = ko.observable();

        //this.experiencePoints = ko.observable(0);
	}

	Tutorial.prototype = _.extend(Tutorial.prototype, {
		redirectAndStartTour: function () {
            window.location.href = "#/chapter-1-step-1";
            
        },

        endTourAndRedirect: function () {
            tourService.end();
            window.location.href = "#/chapters-overview";
        }
	});

	return Tutorial;
});