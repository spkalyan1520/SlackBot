var Bot = require('slackbots');

class BandwidthBot extends Bot{
    constructor(settings){
        super(settings);
    }
    run(){
        this.on('start',this._onStart);
        this.on('message',this._onMessage);
    }
    _onStart(){
       // console.log('Started');
    }
    _onMessage(message){
        console.log(message);
    }
}

var settings = {
    token: 'xoxb-241946935075-xKvR3kPU1DQPNrBsabSx33fd',
    name: 'Bandwidth Bot'
};

const bot= new BandwidthBot(settings);
bot.run();
module.exports.BandwidthBot = BandwidthBot;
