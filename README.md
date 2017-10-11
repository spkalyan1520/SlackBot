# SlackBot

A simple way to create slack bots for a conversational user experience. 
This is a wrapper around the slackbots package geared mainly towards channels

# Installation

```
npm install slack-ux
```

### Methods
- `setSuggestions(suggestions)` (return: null) - sets the suggestions object that defines the keywords and the functions to invoke,
- `isChannelConversation(message)` (return: boolean) - returns a true/false of whether this message is a channel conversation,
- `isMyChannel(message)` (return: promise) - returns true/false of whether this message is from the configured channel,
- `getChannelDetails(message)` (return: promise) - returns a channel object with channel details,
- `postChannelMessage(message)` (return: null) - posts a message to the channel configured by in the settings,
- `isFromBot(message)` (return: boolean) - returns a true/false of whether the message event was just generated because of the bot posting to the channel,
- `isChatMessage(message)` (return: boolean) - returns a list of all channels in the team,
- `callAction(message)` (return: promise) - invokes the appropriate action function is the message matches any of the suggestions,
- `getChannels()` (return: promise) - returns a list of all channels in the team,
- `getGroups()` (return: promise) - returns a list of all groups in the team,
- `getUsers()` (return: promise) - returns a list of all users in the team,
- `fns` (return: null) - fns objects to hold all the invoked functions,
- `getImChannels()` (return: promise) - returns a list of bots direct message channels in the team,
- `getChannel(name)` (return: promise) - gets channel by name,
- `getGroup(name)` (return: promise) - gets group by name,
- `getUser(name)` (return: promise) - gets user by name,
- `getUserByEmail(name)` (return: promise) - gets user by name,
- `getChannelId(name)` (return: promise) - gets channel ID by name,
- `getGroupId(name)` (return: promise) - gets group ID by name,
- `getUserId(name)` (return: promise) - gets user ID by name,
- `getChatId(name)` (return: promise) - it returns or opens and returns a direct message channel ID,
- `postEphemeral(id, user, text, params)` (return: promise) - posts an ephemeral message to channel and user by ID,
- `postMessage(id, text, params)` (return: promise) - posts a message to channel | group | user by ID,
- `updateMessage(channelId, timestamp, text, params)` (return: promise) - updates a message in a channel,
- `postTo(name, message [, params, callback])` (return: promise) - posts a message to channel | group | user by name,
- `postMessageToUser(name, message [, params, callback])` (return: promise) - posts a direct message by user name,
- `postMessageToGroup(name, message [, params, callback])` (return: promise) - posts a message to private group by name,
- `postMessageToChannel(name, message [, params, callback])` (return: promise) - posts a message to channel by name.
- `openIm(userId)` (return: promise) - opens a direct message channel with another member in the team


### Usage
```js

const BandwidthBot = require('slack-ux');

var bot= new BandwidthBot({
    token:'xoxb-111111111111-abcdefghijklmnopqrstuvwx', // Add a bot https://my.slack.com/services/new/bot and copy the token 
    name:'mybot',
    channel:'mychannel'
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
        bot.isMyChannel(msg).then(res=>{ //Checks if this is a message form the channel mentioned in the settings
            if(res)
                bot.callAction(msg);
        })
    }
});

bot.fns.greetMe = function(){ //This name should the key in suggestions
    bot.postChannelMessage("Hi how are you?");
}

bot.fns.sayGoodBye = function(){ //This name should match the key in the suggestions
    bot.postChannelMessage("Goodbye!");
}
```

![Alt text](/Screen_Shot.png?raw=true)
##Response Handler
The simplest way for handling response is callback function, which is specified as a last argument:
```js
bot.postMessageToUser('user1', 'hi', function(data) {/* ... */});
bot.postMessageToUser('user1', 'hi', params, function(data) {/* ... */});
```

But also you can use promises.

Error:
```js
bot.postMessageToUser('user1', 'hi').fail(function(data) {
    //data = { ok: false, error: 'user_not_found' }
})
```
Success:
```js
bot.postMessageToUser('user', 'hi').then(function(data) {
    // ...
})
```
Error and Success:
```js
bot.postMessageToUser('user', 'hi').always(function(data) {
    // ...
})
```