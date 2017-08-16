export default class Resize{
    constructor(){
        let timer = false;
        $(window).on('resize',()=>{
            if(timer){}
            else{
                clearTimeout(timer);
            }
            timer = setTimeout(()=>{
                $(window).trigger('WINDOW_RESIZED');
            },200);
        });
    }
}