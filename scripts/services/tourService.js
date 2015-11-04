define(['config'], function (config) {
	'use strict';

	var tour;

	return {
		start: start,
		end: end
	}

	function start (chapterAndPart) {
		setTimeout(function () {
			startHelpTour(chapterAndPart);
		}, 50);
	}

	function end () {
		tour.end();
	}

	function startHelpTour (chapterAndPart) {
		if(chapterAndPart === config.pageId.chapter1Step1) { 
			tour = new Tour({
	    		name: 'firstChapterPage1',
	            container: ".chapter-1-step-1-component",
	            keyboard: true,
	            backdrop: true,
	            debug: true,
	            storage: false, //For debugging the tour. Remove this in production
	            steps: [
	                {
	                    element: '.left-column-wrapper',
	                    content: "1. Content of my step",
	                    placement: "right"
	                },
	                {
	                    element: '.right-column-wrapper',
	                    content: "2. Content of my step",
	                    placement: "left"
	                }
	            ],
	    	});

	        // Initialize the tour
	        tour.init();

	        // Start the tour
	        tour.start();
		} else if(tour) {
			tour.end();
		} else {
			return;
		}
		

	}
});