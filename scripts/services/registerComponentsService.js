define(['knockout',
	'viewmodels/Quest',
	'text!components/start-component.html',
	'text!components/chapter-1-component.html',
	'text!components/chapter-2-component.html'], function (ko, Quest, startComponent, chapter1Component, chapter2Component) {

	'use strict';

    ko.components.register('start-component', {
	 	viewModel: Quest,
        template: startComponent
    });

    ko.components.register('chapter-1-component', {
		viewModel: function(params) {
	        this.params = ko.observable(params);
	    },
        template: chapter1Component
    });

    ko.components.register('chapter-2-component', {
		viewModel: function(params) {
	        this.params = ko.observable(params);
	    },
        template: chapter2Component
    });
});