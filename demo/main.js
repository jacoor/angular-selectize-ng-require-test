/* jslint browser: true, undef: true, newcap: true, forin: true, sub: true, white: true, indent: 4, unused: false */
/* globals require: true, Settings: true, Raven: true, alert: true */

require.config({
    'baseUrl': '/lib/',
    'paths': {
        'domReady': '/bower_components/domReady/domReady',
        'angular': 'angular/angular.min',
        'angularAMD': 'angularAMD/angularAMD.min',
        'jquery': 'jquery/dist/jquery.min',
        'selectize': 'selectize/dist/js/standalone/selectize',
        'selectize-ng': 'selectize-ng/dist/selectize-ng',

        'app': '/demo/app',
        'setup': '/demo/setup',
    },
    shim: {
        'angular': {
            'deps': ['jquery'],
            'exports': 'angular'
        },
        'angularAMD': ['angular'],
        'selectize': {
            'deps': ['jquery'],
        },
        'selectize-ng': {
            'deps': ['selectize', 'angular'],
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

        require(['domReady!'], function() {


            var start = function() {
                angularAMD.bootstrap(App);
            };

            start();
            
        });

    }
);
