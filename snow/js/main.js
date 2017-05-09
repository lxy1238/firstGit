//需要用到随机数的地方有一下几个方面
/*
* 1、雪片产生的时候，距离历览器的左边是随机的
* 2、每个雪片下降的速度是随机的
* 3、雪片的大小
* 4、雪片下落之后，距离浏览器的左边是随机的
* 5、雪片的透明度是随机的
*                                        ❄   这个是雪片的符号
* */

var minSize = 5;
var maxSize = 50;
var newOn = 500;  //单位是毫秒
var flakeColor  = '#fff';
var flake = $('<div></div>').css({'position':'absolute','top':'-50px'}).html('❄');

$(function () {
    var documentHeight ;
    var documentWidth ;

    window.onresize = function () {
         documentHeight = $(document).height();
         documentWidth = $(document).width();
    };

    setInterval(function () {
        var startPositionLeft = Math.random()*documentWidth;
        var startOpacity = 0.7 + Math.random() * 0.3;
        var startSize = minSize + Math.random()*maxSize;
        var endPositionTop = documentHeight;
        var endPositionLeft =  Math.random()*documentWidth;
        var durationFall = 5000+Math.random()*3000;

        flake.clone().appendTo("body").css({
            'left':startPositionLeft,
            'opacity':startOpacity,
            'font-size':startSize,
            'color':'white'
        }).animate({
            "top":endPositionTop,
            "left":endPositionLeft,
            "opacity":0.5

        },durationFall,function () {
            $(this).remove();
        })
    },newOn);



});


