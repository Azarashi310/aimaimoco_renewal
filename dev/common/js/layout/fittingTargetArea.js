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
                console.log('resized');
                _this.fittingTarget();
            }, 200);
        });
    }
    fittingTarget(){
        $.each(this.$target.children(),()=>{
            console.log($(this));
            if($(window).height() <= 820){
                $(this).css({
                    'height':820
                });
            }else{
                $(this).css({
                    'height':$(window).height()
                });
            }
        });
    }
}

