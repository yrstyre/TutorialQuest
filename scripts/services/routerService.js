define(["jquery", "knockout", "sammy", "config", "services/tourService"], function ($, ko, sammy, config, tourService) {
	'use strict';

    var router = {};

    router.start = function (vm) {
    	var def = $.Deferred();
        var self = this;
        var s = sammy('#quest-app', function () {
        	this.get("#/", function () {
                vm.componentName("start-component");
        	});

            this.get("#/:component", function (context) {
                vm.componentName(self.getComponentName(context));
                var pageId = vm.componentName().replace(/[^0-9]/g, '') ? parseInt(vm.componentName().replace(/[^0-9]/g, '')) : null;

                tourService.start(pageId);

                vm.params({});
            });
        });
        s.run('#/');
        def.resolve();
        return def.promise();
    };

    router.getComponentName = function (context) {
        return (context.params.component + "-component").toLowerCase();
    }

    return router;
});