var settings = require('./config/slack-settings.config');
var BandwidthBot = require('./lib/bandwidthbot');

var bot= new BandwidthBot(settings,function(){
 console.log('Started');
}, function(msg){
    console.log(msg);
});
bot.run();