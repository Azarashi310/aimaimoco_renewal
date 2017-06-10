export default class Twitter{
    constructor(){
        this.twitter = require('twitter');
        this.twitterObject;
    }
    init(){
        this.client = new this.twitter(
            {
                consumer_key: '	zgctOpxvMrdbKH87SqIfaWAzW',
                consumer_secret: 'FWiSlJ7ZpHmd80ae0C8S5LS9A70UehaJYAH4yOc7v6kfKj1fiH',
                access_token_key: '68897445-HLpp2FSpQ3tqRTNYDEfJ47hxt5GNFNaEZl6rQI309',
                access_token_secret: 'gSKnTAUucSOmdO0PelbBoawTFOS3vd1cC6SHI9JiyEmzV'
            }
        )
    }
    getTwitterData(){
        this.client.stream('status/filter',{
            track : '@kudryavka310'
        },(stream)=>{
            stream.on('data',(data)=>{
                let text = data.text;
                let textCleaned = text.replace(/@【アカウント名】 /g, "");
                console.log(textCleaned)
            });
        });
    }
}

