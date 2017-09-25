var Bot = require('slackbots');

class BandwidthBot extends Bot{
    constructor(settings,startFunc, messageFunc){
        super(settings);
        this._onStart = startFunc;
        this._onMessage = messageFunc;
    }
    run(){
        this.on('start',this._onStart);
        this.on('message',this._onMessage);
    }
}
module.exports = BandwidthBot;
