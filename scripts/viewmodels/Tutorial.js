define(['underscore', 'knockout'], function (_, ko) {
	'use strict';

	function Tutorial () {
		this.componentName = ko.observable();
        this.params = ko.observable();

        this.experiencePoints = ko.observable(0);

        setTimeout(this.startHelpTour, 100);
	}

	Tutorial.prototype = _.extend(Tutorial.prototype, {
		startHelpTour: function (argument) {
        	var tour = new Tour({
        		name: 'gdgd' //TODO: set name for help-tour
        	});
        	tour.addSteps([
			    {
			      element: ".quest-text", 
			      content: "Cont1111ent of my step", //TODO: finish tour
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
        },

        // getPointsAndRedirect: function (part) {
        // 	this.experiencePoints(this.experiencePoints() + 10);

        // 	if(part.id >= 5) { //TODO: set 5 in config as numberOfSteps
        // 		return;
        // 	}

        // 	window.location.href = '#/step-' + (part.id + 1);
        	
        // }
	});

	return Tutorial;
});