export default class BgAreaAnimetion{
    constructor($target){
        this.$target = $target;
        this.$targetsArray = [];
    }
    init(){
        this.switchingBgAnimetion();
        let _this = this;
        $.each(_this.$target,()=>{
            console.log(this);
        });
    }
    switchingBgAnimetion(){

    }
}