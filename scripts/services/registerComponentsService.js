define(['knockout',
	'text!components/start-component.html',
	'text!components/chapters-overview-component.html',
	'text!components/step-1-component.html',
	'text!components/step-2-component.html'], function (ko, startComponent, chaptersOverviewComponent, step1Component, step2Component) {

	'use strict';

    ko.components.register('start-component', {
	 	viewModel: function (params) {
	 		this.params = ko.observable(params);
	 		setTimeout(this.startHelpTour, 100);
	 	},
        template: startComponent
    });

    ko.components.register('chapters-overview-component', {
		viewModel: function(params) {
	        this.params = ko.observable(params);
	    },
        template: chaptersOverviewComponent
    });

    ko.components.register('step-1-component', {
	 	viewModel: function(params) {
	        this.params = ko.observable(params);
	        this.id = 1;
	    },
        template: step1Component
    });

    ko.components.register('step-2-component', {
		viewModel: function(params) {
	        this.params = ko.observable(params);
	        this.stepId = 2;
	    },
        template: step2Component
    });


});