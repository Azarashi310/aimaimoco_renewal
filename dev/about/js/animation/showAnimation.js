export default class ShowAnimation{
    constructor(){
        this.$header = $('#globalNavBlock .globalNav__header');
        this.$targets = $('.jsAnim');
        this.scrollAmount = 0;
        this.$targets.css({
            'opacity':0,
            'position':'relative',
            'top':40
        });
    }
    init(){
        $('#contentMain').on('scroll',this,this.animationControll);
        $('#contentMain').trigger('scroll');
    }
    animationControll(e){
        let _this = e.data;
        _this.scrollAmount = $(this).scrollTop();
        _this.$targets = $('.jsAnim');
        $.each(_this.$targets,function(index){
            if(($(this).offset().top - 500 - _this.$header.height()) < 200){
                _this.animation($(this))
            }
        });
    };

    animation(target){
        target.removeClass('jsAnim');
        if(target.hasClass('fadeUp')){
            TweenMax.to(target,0.8,{
                opacity:1,
                top:0,
                ease:Power2.easeOut,
                delay:target.data('delay')
            });
        }
        if(target.hasClass('title1')){
            let tl = new TimelineMax({
                delay:0,
                paused:false
            });
            target.css({
                'opacity':1,
                'top':'auto'
            });
            tl.addLabel('title1');
            tl.insertMultiple(
                [
                    TweenMax.to(target.find('.about__title'),0.4,{
                        opacity:1,
                        delay:0.4
                    }),
                    TweenMax.fromTo(target.find('.bar1'),0.4,{
                        position:'absolute',
                        top:58,
                        left:20
                    },{
                        top:-17,
                        left:94,
                        opacity:1
                    }),
                    TweenMax.fromTo(target.find('.bar2'),0.4,{
                        position:'absolute',
                        top:-17,
                        left:94
                    },{
                        top:58,
                        left:20,
                        opacity:1
                    })
                ],
                'title1'
            );
            tl.play();
        }
        if(target.hasClass('title2')){
            let tl = new TimelineMax({
                delay:0,
                paused:false
            });
            target.css({
                'opacity':1,
                'top':'auto'
            });
            tl.addLabel('title2');
            tl.insertMultiple(
                [
                    TweenMax.to(target.find('.text'),0.4,{
                        opacity:1,
                        delay:0.6
                    })
                ],
                'title2'
            );
            /*
             * Lazy Line Painter - Path Object
             * Generated using 'SVG to Lazy Line Converter'
             *
             * http://lazylinepainter.info
             * Copyright 2013, Cam O'Connell
             *
             */

            let pathObj1 = {
                "about_line1": {
                    "strokepath": [
                        {
                            "path": "M -0.5 0.5 L 100.5 0.5",
                            "duration": 200
                        },
                        {
                            "path": "M 101 0 L 101 30",
                            "duration": 200
                        },
                        {
                            "path": "M 101.5 29.5 L 162 29.5",
                            "duration": 200
                        }
                    ],
                    "dimensions": {
                        "width": 162,
                        "height": 30
                    }
                }
            };

            var pathObj2 = {
                "about_line2": {
                    "strokepath": [
                        {
                            "path": "M 162 29.5 L 61 29.5",
                            "duration": 200
                        },
                        {
                            "path": "M 60.5 30 L 60.5 0",
                            "duration": 200
                        },
                        {
                            "path": "M 60 0.5 L -0.5 0.5",
                            "duration": 200
                        }
                    ],
                    "dimensions": {
                        "width": 162,
                        "height": 30
                    }
                }
            };


            /*
             Setup and Paint your lazyline!
             */

            $('#about_line1').lazylinepainter({
                "svgData": pathObj1,
                "strokeWidth": 2,
                "strokeColor": "#ffffff"
            }).lazylinepainter('paint');

            $('#about_line2').lazylinepainter({
                "svgData": pathObj2,
                "strokeWidth": 2,
                "strokeColor": "#ffffff"
            }).lazylinepainter('paint');

            tl.play();
        }
    }
}
