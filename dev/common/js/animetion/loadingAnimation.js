export default class LoadingAnimation{
    constructor(){
        this.$loading = $('#loading');
        this.loadingFlag = false;
        this.timeElapsedFlag = false;
    }
    init(){
        setTimeout(()=>{
            this.timeElapsedFlag = true;
            if(this.timeElapsedFlag && this.loadingFlag) this.loadComplete();
        },2000);
        $(window).load(()=>{
            this.loadingFlag = true;
            if(this.timeElapsedFlag && this.loadingFlag) this.loadComplete();
        })
    }
    loadComplete(){
        TweenMax.to(this.$loading,0.4,{
            opacity:0,
            onComplete:()=>{
                $(window).trigger('LOAD_COMP');
                this.$loading.css({
                    'display':'none'
                });
            }
        });
    }
}