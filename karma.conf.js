module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jspm', 'jasmine', 'phantomjs-shim'],
    proxies: {
      '/src': '/base/src',
      '/src/app': '/base/src/app',
      '/src/app/compoenents': '/base/src/app/components',
      '/src/app/helpers': '/base/src/app/helpers',
      '/src/app/services': '/base/src/app/services',
      '/src/vendor': '/base/src/vendor',
      '/vendor': '/base/src/vendor',
      '/spec': '/base/spec',
      '/typings': '/base/typings'
    },
    jspm: {
      config: 'src/config.js',
      packages: "src/vendor",
      loadFiles: ['spec/*.spec.tsx'],
      serveFiles: ['src/app/**/*.tsx', 'src/app/**/*.less']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
};
