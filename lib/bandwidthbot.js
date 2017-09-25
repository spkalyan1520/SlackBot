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
module.exports = BandwidthBot;
