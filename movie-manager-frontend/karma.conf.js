module.exports = function(config) {
    config.set({
        files: [
            'vendor/angular/angular.min.js',
            'vendor/angular-route/angular-route.min.js',
            'vendor/angular-messages/angular-messages.min.js',
            'vendor/angular-mocks/angular-mocks.js',
            'app/**/*.module.js',
            'app/**/*.js',
            'app/**/*.tpl.html'
        ],
        frameworks: ['jasmine'],
        exclude: ['karma.conf.js'],
        reporters: ['progress'],
        port: 9876,
        runnerPort: 9100,
        colors: true,
        preprocessors: {
            'app/**/*.tpl.html': ['ng-html2js']
        },
        ngHtml2JsPreprocessor: {
            moduleName: 'templates'
        },
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        captureTimeout: 60000,
        browserNoActivityTimeout: 30000
    });
};