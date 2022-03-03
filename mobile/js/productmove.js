
var b_cnt=1;
var b_imgcnt=5;
var b_p=[];
var b_moveOn=[];
var b_center=4;
var b_per=15;
var b_move_pX;
var b_move_pY;
var on_init=0;
var scroll_on=0;
var swipe_on=0;

$(document).ready(function(){

    var startX, endX;
    init_b_set();

    $('.bizcon_wrap').on('mousedown',function(e){
        e.preventDefault();
        startX=e.clientX || e.originalEvent.clientX;
        startY=e.pageY || e.originalEvent.pageY;
    });

    $('.bizcon_wrap').on('touchstart',function(e){
        startX=e.clientX || e.originalEvent.touches[0].clientX;
        startY=e.pageY || e.originalEvent.touches[0].pageY;
    });

    $(".bizcon_wrap").on("touchend touchmove", function(e){

        var doc_w=$(document).width();
        
        var moveX = e.originalEvent.changedTouches[0].clientX;
        var moveY = e.originalEvent.changedTouches[0].pageY;
        b_move_pX=(startX-moveX)/doc_w*10;
        b_move_pY=(startY-moveY)/doc_w;
        
        if(on_init==0){
            on_init=1;
            if(Math.abs(b_move_pY)+5>Math.abs(startX-moveX)){scroll_on=1; swipe_on=0;} 
            else {swipe_on=1; scroll_on=0;}
        }
        
        if(scroll_on==0){
            e.preventDefault();
            if((Math.abs(startX-moveX)/doc_w)>Math.abs(b_move_pY)){
                move_X();
            }
        }
    });
    
    $('.bizcon_wrap').on('touchend mouseup',function(e){
        
        endX=e.clientX || e.originalEvent.changedTouches[0].clientX;
        endY=e.pageY || e.originalEvent.changedTouches[0].pageY;

        if (scroll_on==0){
            if(Math.abs(startX-endX)>Math.abs(startY-endY)){
                if(startX<endX) {
                    if(b_cnt<1){b_cnt=b_imgcnt;}
                    b_toright();
                }else{
                    if(b_cnt==(b_imgcnt+1)){b_cnt=1;}
                    b_toleft();
                }
            } else {
                for(var i=0; i<b_imgcnt; i++){
                    b_moveOn[i]=b_p[i];
                    $('.bizcon_wrap li:eq('+i+')').css({left:b_p[i]+'%', transition:'none'});
                }
            }
        }
        on_init=0;
        swipe_on=0;
        scroll_on=0;
    });

 /*    $('.business>a').click(function(e){
        e.preventDefault();
        if($(this).hasClass('b_next')){
            b_toleft();
        } else if($(this).hasClass('b_before')){
            b_toright();
        }
    }); */
});

function init_b_set(){
    for(var i=0; i<b_imgcnt; i++){
        b_p[i]=b_center+b_per*i;
        if (b_p[i]>b_center+parseInt(b_imgcnt/2)*b_per){
            b_p[i]=b_center-b_per*(b_imgcnt-i);
        };
        b_moveOn[i]=b_p[i];
    }
}

function b_toright(){

    for(var i=0; i<b_imgcnt; i++){
        if(b_p[i]==(b_center+parseInt(b_imgcnt/2)*b_per)){
            b_p[i]=b_center-b_per;
        }else {b_p[i]+=b_per;}
        b_moveOn[i]=b_p[i];
    };

    for(var j=0; j<b_imgcnt; j++){
        if(b_p[j]==b_center-b_per){
            $('.bizcon_wrap li:eq('+j+')').fadeOut(1).css({left:b_p[j]+'%', transition:'all .4s ease-out'}).fadeIn(600);
        } else {
            $('.bizcon_wrap li:eq('+j+')').css({left:b_p[j]+'%', transition:'all .5s ease-out'});
        } 
    };
};

function b_toleft(){

    for(var i=0; i<b_imgcnt; i++){
        if(b_p[i]==(b_center-b_per)){
            b_p[i]=b_center+parseInt(b_imgcnt/2)*b_per;
        }else {b_p[i]-=b_per;}
        b_moveOn[i]=b_p[i];
    }
    for(var j=0; j<b_imgcnt; j++){
        if(b_p[j]==(b_center+parseInt(b_imgcnt/2)*b_per)){
            $('.bizcon_wrap li:eq('+j+')').css({left:b_p[j]+'%', transition:'none'});
        } else {
            $('.bizcon_wrap li:eq('+j+')').css({left:b_p[j]+'%', transition:'all .5s ease-out'});
        } 
    };
};

function move_X(){
    
    for(var i=0; i<b_imgcnt; i++){
        b_moveOn[i]-=b_move_pX;
        $('.bizcon_wrap li:eq('+i+')').css({left:b_moveOn[i]+'%', transition:'none'});
        b_moveOn[i]=b_p[i];
    }
}
