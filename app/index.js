/**
 * Created by jessepinuelas on 5/7/16.
 */

'use strict';

var generators  = require('yeoman-generator');
var mkdirp      = require('mkdirp');
var WP          = require('wp-cli');
var wpPath      = '';


module.exports = generators.Base.extend({
    constructor: function(){
        generators.Base.apply(this, arguments);
    }
});


module.exports = generators.Base.extend({
    appStructure: function () {},

    downloadWordPress: function () {
        WP.discover({path:wpPath},function(WP){
            WP.core.download(function(){
                console.log('Downloading wordpress complete');
            });
        });
    }
});
