import TopAnimation from './animation/topAnimation'

$(()=>{
    const topAnimation = new TopAnimation();
    topAnimation.init();
    $(window).on('LOAD_COMP',()=>{
        topAnimation.animation();
    });
});