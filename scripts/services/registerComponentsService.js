define(['knockout',
	'text!components/start-component.html',
	'text!components/chapters-overview-component.html',
	'text!components/step-1-component.html',
	'text!components/step-2-component.html',
	'text!components/step-3-component.html',
	'text!components/step-4-component.html',
	'text!components/step-5-component.html',
	'text!components/finish-component.html'], function (ko, startComponent, chaptersOverviewComponent, step1Component, step2Component, step3Component, step4Component, step5Component, finishComponent) {

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

    ko.components.register('step-3-component', {
		viewModel: function(params) {
	        this.params = ko.observable(params);
	        this.stepId = 3;
	    },
        template: step3Component
    });

    ko.components.register('step-4-component', {
		viewModel: function(params) {
	        this.params = ko.observable(params);
	        this.stepId = 4;
	    },
        template: step4Component
    });

    ko.components.register('step-5-component', {
		viewModel: function(params) {
	        this.params = ko.observable(params);
	        this.stepId = 5;
	    },
        template: step5Component
    });

    ko.components.register('finish-component', {
		viewModel: function(params) {
	        this.params = ko.observable(params);
	    },
        template: finishComponent
    });


});