export default class BgAreaAnimetion{
    constructor($target, $listButton){
        this.$target = $target;
        this.$targetArray = [];
        this.current = 0;
        this.bgLength = 0;
        this.intervalID;
        this.$bgListButton = $listButton;
        this.$bgListButtonArray = [];
        this.bgSlideAnimationTween;
    }
    init(){
        this.bgLength = this.$target.length;
        this.$bgListButton.on('click',this,this.bgListButtonClick);
        $(window).on('resize',()=>{
            this.bgSlideAnimationTween.pause(0);
            this.bgSlideAnimation(this.current);
            clearInterval(_this.intervalID);
            _this.startInterval();
        });
        for(let i = 0; i < this.bgLength; i++){
            if($(this.$target[i]).hasClass('current')){
                this.current = i;
            }
            this.$bgListButtonArray[i] = $(this.$bgListButton[i]);
            this.$targetArray[i] = $(this.$target[i]);
        }
        this.bgSlideAnimation(this.current);
        this.startInterval();
    }
    startInterval(){
	    let _this = this;
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
        this.$targetArray[next]
            .addClass('next')
            .css({
                'background-position':'0px 0px'
            });
        this.$bgListButtonArray[next].addClass('next');
        let tl = new TimelineMax({
	        delay:0,
            paused:true,
            onComplete:()=> {
	            this.$targetArray[this.current].removeClass('current');
	            this.$bgListButtonArray[this.current].removeClass('current');
	            this.$targetArray[next]
		            .removeClass('next')
		            .addClass('current');
	            this.$bgListButtonArray[next]
		            .removeClass('next')
		            .addClass('current');
                this.bgSlideAnimation(next);
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
                }),
	            TweenMax.fromTo(this.$bgListButtonArray[this.current],0.4,{
		            backgroundColor:'#0F74A3'
	            },{
		            backgroundColor:'#c6d1e2'
	            }),
	            TweenMax.fromTo(this.$bgListButtonArray[next],0.4,{
		            backgroundColor:'#c6d1e2'
	            },{
		            backgroundColor:'#0F74A3'
	            })
            ],
            'startAnimation'
        );
        tl.play();
    }
	bgListButtonClick(e){
		let _this = e.data;
		clearInterval(_this.intervalID);
		_this.switchingBgAnimetion($(this).data('num'));
		_this.startInterval();
	}
	bgSizeCalc(){
        let targetHeight = $('#contents .bg').height();
        let widthRatio = 61;
        let heightRatio = 32;
        let realWidth = ((widthRatio / heightRatio) * targetHeight) << 0;
        return realWidth;
    }
    bgSlideAnimation(target){
        if(this.$targetArray[target].width() - this.bgSizeCalc() > 0) return false;
        this.bgSlideAnimationTween = TweenMax.fromTo(this.$targetArray[target],8.5,{
            backgroundPosition:'0px 0px'
        },{
            backgroundPosition:this.$targetArray[target].width() - this.bgSizeCalc() + 'px 0px',
            ease:Power0.easeNone
        });
    }
}