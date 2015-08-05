/**
 * Created by nikulkarni on 8/18/14.
 */

var Nemo = require('nemo');

var WorldConstructor = function WorldConstructor(callback) {
    var __dirname = process.cwd()+"/test/functional";
    this.nemo = new Nemo(__dirname,function(err){
        if(err) {
            console.log('There was  error', err);
            callback(err);
        }
        callback();
    });
};
exports.World = WorldConstructor;