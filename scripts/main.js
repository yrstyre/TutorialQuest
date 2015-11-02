requirejs(['bootstrap', 'bootstrapTour'], boot);

function boot() {
    require(['services/registerComponentsService', 'services/appservice'], function(registerComponentsService, appservice) {
        appservice.start();
    });
}