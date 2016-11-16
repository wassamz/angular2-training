// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
var cwd = process.cwd();

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'angular-cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-remap-istanbul'),
      require('angular-cli/plugins/karma'),
      require('karma-phantomjs-launcher')
    ],
    files: [
      { pattern: './src/test.ts', watched: false }
    ],
    preprocessors: {
      './src/test.ts': ['angular-cli']
    },
    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },
    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },
    /*webpack: {
      devtool: 'inline=source-map',
      resolve:{
          root: [path.resolve(cwd)],
          modulesDirectories: ['node_modules', 'app', 'app/ts', 'test', '.'],
          extensions: ['', '.ts', '.js', '.css'],
          alias: {
            'app':'app'
          }
      }
    },*/
    reporters: config.angularCli && config.angularCli.codeCoverage
              ? ['progress', 'karma-remap-istanbul']
              : ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    //browsers: ['PhantomJS'],
     browsers: ['Chrome'],
    singleRun: false
  });
};
