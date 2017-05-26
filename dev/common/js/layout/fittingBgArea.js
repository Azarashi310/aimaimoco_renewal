export default class FittingBgArea{
    constructor($target,margin){
        this.$target = $target;
        this.margin = margin;
        this.resizedHeight = 0;
    }
    init(){
        console.log('windowHeight', $(window).height());
        console.log('resizedHeight', $(window).height()-(this.margin[0] + this.margin[2]));
        this.resizeBgArea();
        let _this = this;
        let timer = false;
        $(window).resize(function() {
            if (timer !== false) {
                clearTimeout(timer);
            }
            timer = setTimeout(function() {
                console.log('resized');
                _this.resizeBgArea();
            }, 200);
        });
    }

    resizeBgArea(){
        if($(window).height() <= 820){
            console.log('small');
            this.$target.css({
                'height':720
            });
            this.$target.parent().css({
                'height':720
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