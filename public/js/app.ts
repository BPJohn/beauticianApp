namespace NodeAuth {
    let module: ng.IModule = angular.module('app', [
        /* Third Party Modules */
        'ui.router','ngResource',

        /* Application Modules */
        'app.views'
    ]);

    module.config(NodeAuth.Configuration);

    module.controller('ApplicationController', NodeAuth.ApplicationController);
    module.controller('serviceProController',NodeAuth.serviceProController);

    module.service('AccountService', Services.AccountService);
    module.service('TestService', Services.TestService);
    module.service('proService',services.proService);
}
