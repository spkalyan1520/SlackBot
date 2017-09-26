var settings = require('./config/slack-settings.config');
var BandwidthBot = require('./lib/bandwidthbot');

var bot= new BandwidthBot(settings);
bot.run();

//On start
bot.on('start',function(){
   console.log('Started');
});

//On Message
bot.on('message',function(msg){
   console.log(msg);
});