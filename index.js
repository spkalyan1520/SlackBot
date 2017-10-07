var Bot = require('slackbots');

class SlackBot extends Bot{
    constructor(settings){
        super(settings);
        this.settings = settings;
        this.getChannelDetails;
    }

    setSuggestions(suggestions){
        this.suggestions = suggestions;
    }

    //Utility Methods
    isChannelConversation(message){
        return typeof message.channel === 'string' &&
            message.channel[0] === 'C';
    }

    isMyChannel(message){
        return this.getChannelDetails(message).then(channel=> this.settings.channel === channel.name);
    }

    getChannelDetails(message){
        return this.getChannelById(message.channel);
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
