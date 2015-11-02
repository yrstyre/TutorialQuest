define(['knockout',
	'viewmodels/Quest',
	'text!components/start-component.html',
	'text!components/chapters-overview-component.html',
	'text!components/step-1-component.html',
	'text!components/step-2-component.html'], function (ko, Quest, startComponent, chaptersOverviewComponent, step1Component, step2Component) {

	'use strict';

    ko.components.register('start-component', {
	 	viewModel: Quest,
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
	    },
        template: step1Component
    });

    ko.components.register('step-2-component', {
		viewModel: function(params) {
	        this.params = ko.observable(params);
	    },
        template: step2Component
    });


});