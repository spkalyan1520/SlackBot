const BandwidthBot = require('./index');

var bot= new BandwidthBot({
    token:'xoxb-251832614721-OPVxoVcoQwRtmUqI32HVJmhb',
    name:'bandwidthbot',
    channel:'bandwidth'
});
bot.setSuggestions({
    "greetMe":["hello","say hi","greet","welcome"],
    "sayGoodBye":["leave","bye"]
});
bot.on('start', function(){
    bot.postChannelMessage("Hi welcome to the channel");
});
bot.on('message',function(msg){
    //Check what type of message it is
    if(bot.isChatMessage(msg) && !bot.isFromBot(msg) && bot.isChannelConversation(msg)){
        bot.isMyChannel(msg).then(res=>{
            if(res)
                bot.callAction(msg);
        })
    }
});

bot.fns.greetMe = function(){
    bot.postChannelMessage("Hi how are you?");
}

bot.fns.sayGoodBye = function(){
    bot.postChannelMessage("Goodbye!");
}