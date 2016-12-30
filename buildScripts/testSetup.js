/**
 * Created by jl
 */
// This file is not transpiled, so must use CommonJS end ES5

// Register babel to transpile before our tests run
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function(){};
