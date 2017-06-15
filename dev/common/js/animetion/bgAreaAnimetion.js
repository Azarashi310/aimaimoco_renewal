export default class BgAreaAnimetion{
    constructor($target){
        this.$target = $target;
        this.$targetArray = [];
        this.current = 0;
        this.bgLength = 0;
        this.intervalID;
    }
    init(){
        let _this = this;
        this.bgLength = this.$target.length;
        for(let i = 0; i < this.bgLength; i++){
            if($(this.$target[i]).hasClass('current')){
                this.current = i;
            }
            this.$targetArray[i] = $(this.$target[i]);
        }
        this.intervalID = setInterval(()=>{
	        let next = 0;
	        if(_this.current == (_this.bgLength - 1)){
		        next = 0;
	        }else{
		        next = _this.current + 1;
	        }
	        _this.switchingBgAnimetion(next);
        },8000);
    }
    switchingBgAnimetion(next){
        this.$targetArray[next].addClass('next');
        let tl = new TimelineMax({
	        delay:0,
            paused:true,
            onComplete:()=> {
	            this.$targetArray[this.current].removeClass('current');
	            this.$targetArray[next]
		            .removeClass('next')
		            .addClass('current');
	            this.current = next;
            }
        });
        tl.addLabel('startAnimation',0);
        tl.insertMultiple(
            [
	            TweenMax.to(this.$targetArray[this.current],0.4,{
		            opacity:0
	            }),
                TweenMax.to(this.$targetArray[next],0.4,{
                    opacity:1
                })
            ],
            'startAnimation'
        );
        tl.play();
    }
    bgChangeLoop(){

    }
}