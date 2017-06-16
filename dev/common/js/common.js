import FittingBgArea from './layout/fittingBgArea'
import FittingTargetArea from './layout/fittingTargetArea'
import BgAreaAnimetion from './animetion/bgAreaAnimetion'

$(()=>{
    const fittingBgArea = new FittingBgArea($('#contents .bgArea .bg'),[50,30,50,30]);
    fittingBgArea.init();
    const fittingTargetArea = new FittingTargetArea($('#globalNavBlock .globalNav__side'));
    fittingTargetArea.init();
    const bgAreaAnimetion = new BgAreaAnimetion($('#contents .bgArea .bg'),$('#globalNavBlock .buttons .button'));
    bgAreaAnimetion.init();
});