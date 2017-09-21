var Bot = require('slackbots');

// create a bot
var settings = {
    token: 'xoxb-246125849703-B575yXq94d5bUh8r3efILjYX',
    name: 'botuser'
};
var bot = new Bot(settings);

bot.on('start', function() {
   // bot.postMessageToChannel('general', 'Hello channel!');
   // bot.postMessageToUser('kalyansripathi', 'hello bro!');
    //bot.postMessageToGroup('general', 'hello group chat!');
});

bot.on('message',function(msg){
    console.log(msg);
});