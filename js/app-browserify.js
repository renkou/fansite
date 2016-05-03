// es5 polyfills, powered by es5-shim
require("es5-shim")

// es6 polyfills, powered by babel
require("babel/polyfill")

require("featherlight")
require("featherlight-gallery")
require("bootstrap")


var $ = require("jquery")
var Promise = require('es6-promise').Promise
// just Node?
// var fetch = require('node-fetch')
// Browserify?
// require('whatwg-fetch') //--> not a typo, don't store as a var

// other stuff that we don't really use in our own code
// var Pace = require("../bower_components/pace/pace.js")

// require your own libraries, too!
// var Router = require('./app.js')

// require("./featherlight-1.3.5/release/featherlight.gallery.min.js");
// $ = window.jQuery = 
// window.addEventListener('load', app)

// function app() {
    // start app
    // new Router()
// }

$("#carousel-example-generic").carousel();