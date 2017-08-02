import ShowAnimation from './animation/showAnimation'

$(()=>{
    const showAnimation = new ShowAnimation();
    showAnimation.init();
    $(window).load('LOAD_COMP',()=>{
        showAnimation.animation();
    });
});