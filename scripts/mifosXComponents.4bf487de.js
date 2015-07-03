define(['Q', 'underscore', 'mifosX'], function (Q) {
    var components = {
        models: [
            'models.b7db1888'
        ],
        services: [
            'ResourceFactoryProvider',
            'HttpServiceProvider',
            'AuthenticationService',
            'SessionManager',
            'Paginator',
            'UIConfigService'
        ],
        controllers: [
            'controllers.5df198f9'
        ],
        filters: [
            'filters.fa2ac2a1'
        ],
        directives: [
            'directives.e6b3282c'
        ]
    };

    return function() {
        var defer = Q.defer();
        require(_.reduce(_.keys(components), function (list, group) {
            return list.concat(_.map(components[group], function (name) {
                return group + "/" + name;
            }));
        }, [
            'routes-initialTasks-webstorage-configuration.b022d968'
        ]), function(){
            defer.resolve();
        });
        return defer.promise;
    }
});
