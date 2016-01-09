module.exports = function () {

    var typescriptPreprocessor = file => require('typescript').transform(file.content, {sourceMap: true});
    return {
        files: [
            {pattern: 'src/vendor/system.js', instrument: false},
            {pattern: 'src/config.jspm.typescript.js', instrument: false},

            {pattern: 'src/**/*.tsx', load: false}
        ],
        tests: [
            {pattern: 'spec/*.spec.js', load: false}
        ],

        preprocessors: {
            'spec/**/*.ts': typescriptPreprocessor,
            'src/**/*.tsx': typescriptPreprocessor
        },

        middleware: (app, express) => {
            app.use('/jspm_packages', express.static(require('path').join(__dirname, 'jspm_packages')));
        },

        bootstrap: function (wallaby) {
            wallaby.delayStart();

            var promises = [];
            for (var i = 0, len = wallaby.tests.length; i < len; i++) {
                promises.push(System['import'](wallaby.tests[i].replace(/\.js$/, '')));
            }

            Promise.all(promises).then(function () {
                wallaby.start();
            });
        }
    };
};