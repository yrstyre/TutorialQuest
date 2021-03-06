﻿(function () {
    require.config({
    	baseUrl: 'scripts/',
        paths: {
            knockout: 'lib/knockout/dist/knockout',
            underscore: 'lib/underscore/underscore',
            text: 'lib/text/text',
            sammy: 'lib/sammy/lib/sammy',
            jquery: 'lib/jquery/dist/jquery',
            bootstrap: 'lib/bootstrap/dist/js/bootstrap',
            bootstrapTour: 'lib/bootstrap-tour/build/js/bootstrap-tour'
        },
        shim: {
            bootstrap: ['jquery'],
            bootstrapTour: ['jquery']
        }
    });
}());