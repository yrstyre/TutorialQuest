define(['underscore', 'knockout'], function (_, ko) {
	'use strict';

	function Tutorial () {
		this.componentName = ko.observable();
        this.params = ko.observable();

        setTimeout(this.startHelpTour, 100);
	}

	Tutorial.prototype = _.extend(Tutorial.prototype, {
		startHelpTour: function (argument) {
        	var tour = new Tour({
        		name: 'vvv'
        	});
        	tour.addSteps([
			    {
			      element: ".quest-text", 
			      content: "Cont1111ent of my step",
			      placement: "bottom"
			    },
			    {
			      element: ".list-group",
			      content: "Conten2222t of my step",
			      placement: "left"
			    }
 			]);
            // Initialize the tour
            tour.init();

            // Start the tour
            tour.start();
        }
	});

	return Tutorial;
});