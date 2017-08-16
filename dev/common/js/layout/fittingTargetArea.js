export default class FittingTargetArea{
    constructor($target){
        this.$target = $target;
    }
    init(){
        this.fittingTarget();
        let timer = false;
        let _this = this;
        $(window).resize(function() {
            if (timer !== false) {
                clearTimeout(timer);
            }
            timer = setTimeout(function() {
                _this.fittingTarget();
            }, 200);
        });
    }
    fittingTarget(){
	    if($(window).height() <= 700){
		    this.$target.css({
			    'height':700
		    });
	    }else{
		    this.$target.css({
			    'height':$(window).height()
		    });
	    }
    }
}

