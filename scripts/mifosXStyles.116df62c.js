define(['underscore'], function () {
    var styles = {
        css: [
            'bootstrap.min.f40c778e.css',
            'bootstrap-ext.35020332.css',
            'bootswatch.110f393d.css',
            'font-awesome.min.css',
            'app.ef6a6b03.css',
            'nv.d3.e3f92dce.css',
            'style.7fffe8ac.css',
            'chosen.min.2e743a3e.css'
        ]
    };

    require(_.reduce(_.keys(styles), function (list, pluginName) {
        return list.concat(_.map(styles[pluginName], function (stylename) {
            return pluginName + '!styles/' + stylename;
        }));
    }, []));
});
