/* jslint browser: true, undef: true, newcap: true, forin: true, sub: true, white: true, indent: 4, unused: false */
/* globals require: true, Settings: true, Raven: true, alert: true */

require.config({
    'baseUrl': '/lib/',
    'paths': {
        'angular': 'angular/angular.min',
        'angularAMD': 'angularAMD/angularAMD.min',
        'jquery': 'jquery/dist/jquery.min',
        //'selectize': 'selectize/dist/js/standalone/selectize',
        'selectize-ng': 'selectize-ng/dist/standalone/selectize-ng.min',

        'app': '/demo/app',
        'setup': '/demo/setup',
    },
    shim: {
        //'angular': {
        //    'deps': ['jquery'],
        //    'exports': 'angular'
        //},
        'angularAMD': ['angular'],
        'selectize-ng': {
            'deps': ['jquery'],
        }

    }
});

require([
        'require',
        'angularAMD',
        'app',
        'setup', //starts the app. Notthing more is required!

    ], function(
        require,
        angularAMD,
        App

    ){
        "use strict";

        var start = function(){
            angularAMD.bootstrap(App);
        };
        start();
    }
);
