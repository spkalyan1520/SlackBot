var Bot = require('slackbots');
var async = require('asyncawait/async');
var await = require('asyncawait/await');

class SlackBot extends Bot{
    constructor(settings, suggestions, startFunc, messageFunc){
        super(settings);
        this.settings = settings;
    }

    setSuggestions(suggestions){
        this.suggestions = suggestions;
    }

    //Utility Methods
    isChannelConversation(message){
        return typeof message.channel === 'string' &&
            message.channel[0] === 'C';
    }

    isMyChannel(){
        return this.getChannelDetails(this.settings.channel);
    }

    getChannelDetails(message){
        return async(function(message){
            return await(this.getChannelById(message.channel));
        });
    }

    postChannelMessage(message, channel){
        this.postMessage(channel?channel:this.settings.channel,message);
    }
    isFromBot(message) {
        return message.username === this.settings.name;
    }

    isChatMessage(message) {
        return message.type === 'message' && Boolean(message.text);
    }

    callAction(message){
        let action;
        let found = Object.keys(this.suggestions).some(key=>{
            return this.suggestions[key].some(val=>{
                if(message.text.toLowerCase().indexOf(val)!=-1){
                    action = key;
                    return true;
                }
                return false;
            });
        });
        if(found)
            global[action.substr(0,1)+action.substr(1)]();
        return found;
    }
}
module.exports = SlackBot;
