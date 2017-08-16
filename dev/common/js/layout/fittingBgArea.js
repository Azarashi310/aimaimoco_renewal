export default class FittingBgArea{
    constructor($target,margin){
        this.$target = $target;
        this.margin = margin;
        this.resizedHeight = 0;
    }
    init(){
        this.resizeBgArea();
        let _this = this;
        let timer = false;
        $(window).on('WINDOW_RESIZED',()=>{
            _this.resizeBgArea();
        });
    }

    resizeBgArea(){
        if($(window).height() <= 700){
            this.$target.css({
                'height':600
            });
            this.$target.parent().css({
                'height':600
            });
        }
        else{
            this.resizedHeight = $(window).height()-(this.margin[0] + this.margin[2]);
            this.$target.css({
                'height':this.resizedHeight
            });
            this.$target.parent().css({
                'height':this.resizedHeight
            });
        }
    }
}