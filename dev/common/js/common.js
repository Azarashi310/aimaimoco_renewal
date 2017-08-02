import FittingBgArea from './layout/fittingBgArea'
import FittingTargetArea from './layout/fittingTargetArea'
import BgAreaAnimetion from './animetion/bgAreaAnimetion'
import LoadingAnimation from './animetion/loadingAnimation'

$(()=>{
    const loading = new LoadingAnimation();
    loading.init();
    const fittingBgArea = new FittingBgArea($('#contents .bgArea .bg'),[50,30,30,30]);
    fittingBgArea.init();
    const fittingTargetArea = new FittingTargetArea($('#globalNavBlock .globalNav__side'));
    fittingTargetArea.init();
    $(window).on('LOAD_COMP',()=>{
        const bgAreaAnimetion = new BgAreaAnimetion($('#contents .bgArea .bg'),$('#globalNavBlock .buttons .button'));
        bgAreaAnimetion.init();
    });
});