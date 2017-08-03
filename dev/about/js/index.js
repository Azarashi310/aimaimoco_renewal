import ShowAnimation from './animation/showAnimation'

$(()=>{
    const showAnimation = new ShowAnimation();
    $(window).on('LOAD_COMP',()=>{
        showAnimation.init();
    });
});