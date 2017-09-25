var settings = require('./config/slack-settings.config');
var BandwidthBot = require('./lib/bandwidthbot');

var bot= new BandwidthBot(settings);
bot.run();