export default class TopAnimation{
    constructor(){
        this.$gNavHeader = $('#globalNavBlock .globalNav__header');
        this.$gNavSide = $('#globalNavBlock .globalNav__side');
        this.$bg = $('#globalNavBlock #contents');
        this.$newsNotice = $('.top__noticeArea');
    }
    init(){
        this.$gNavHeader.css({
            'opacity':0
        });
        this.$gNavSide.css({
            'opacity':0
        });
        this.$bg.css({
            'opacity':0
        });
        this.$newsNotice.css({
            'opacity':0,
            'bottom':0
        });
    }
    animation(){
        let tl = new TimelineMax({
            delay:0,
            paused:true
        });
        tl.addLabel('gNavAnimation',0);
        tl.addLabel('contentsAnimation',1.6);
        tl.insertMultiple(
            [
                TweenMax.to(this.$gNavHeader,0.8,{
                    opacity:1
                }),
                TweenMax.to(this.$gNavSide,0.8,{
                    delay:0.4,
                    opacity:1
                }),
                TweenMax.to(this.$bg,0.8,{
                    delay:0.4,
                    opacity:1
                })
            ],
            'gNavAnimation'
        );
        tl.insertMultiple(
            [
                TweenMax.to(this.$newsNotice,0.8,{
                    opacity:1,
                    bottom:13
                })
            ],
            'contentsAnimation'
        );
        tl.play();
    }
}