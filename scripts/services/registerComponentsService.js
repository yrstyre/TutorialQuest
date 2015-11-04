define(['knockout',
	'text!components/start-component.html',
	'text!components/chapters-overview-component.html',
	'text!components/chapter-1-step-1-component.html',
	'text!components/chapter-1-step-2-component.html',
	'text!components/chapter-1-step-3-component.html',
	'text!components/chapter-1-step-4-component.html',
	'text!components/chapter-1-step-5-component.html',
	'text!components/finish-component.html'], function (ko, startComponent, chaptersOverviewComponent, chapter1Step1Component, chapter1Step2Component, chapter1Step3Component, chapter1Step4Component, chapter1Step5Component, finishComponent) {

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

    ko.components.register('chapter-1-step-1-component', {
	 	viewModel: function(params) {
	        this.params = ko.observable(params);
	        this.id = 11;
	    },
        template: chapter1Step1Component
    });

    ko.components.register('chapter-1-step-2-component', {
		viewModel: function(params) {
	        this.params = ko.observable(params);
	        this.stepId = 12;
	    },
        template: chapter1Step2Component
    });

    ko.components.register('chapter-1-step-3-component', {
		viewModel: function(params) {
	        this.params = ko.observable(params);
	        this.stepId = 13;
	    },
        template: chapter1Step3Component
    });

    ko.components.register('chapter-1-step-4-component', {
		viewModel: function(params) {
	        this.params = ko.observable(params);
	        this.stepId = 14;
	    },
        template: chapter1Step4Component
    });

    ko.components.register('chapter-1-step-5-component', {
		viewModel: function(params) {
	        this.params = ko.observable(params);
	        this.stepId = 15;
	    },
        template: chapter1Step5Component
    });

    ko.components.register('finish-component', {
		viewModel: function(params) {
	        this.params = ko.observable(params);
	    },
        template: finishComponent
    });


});