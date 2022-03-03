/* $(function () {
    var count0 = count1 = count2 = count3 = 0;

    timeCounter();

    function timeCounter() {

        cnt0 = setInterval(count0Fn, 100);
        //(5/50)*1000=100
        function count0Fn() {
            count0++;
            if (count0 > 50) {
                clearInterval(cnt0);
            } else {
                $(".big_text:eq(0)").text(count0);
            }
        }

        cnt1 = setInterval(count1Fn, 0.0001);
        //(5/50273)*1000=0.09945696
        function count1Fn() {
            count1++;
            if (count1 > 50273) {
                clearInterval(cnt1);
            } else {
                $(".big_text:eq(1)").text(count1);
            }
        }

        cnt2 = setInterval(count2Fn, 0.0001);
        //(5/48095)*1000=0.10396091
        function count2Fn() {
            count2++;
            if (count2 > 48095) {
                clearInterval(cnt2);
            } else {
                $(".big_text:eq(2)").text(count2);
            }
        }

        cnt3 = setInterval(count3Fn, 0.067367286);
        //(5/7422)*1000=0.67367286
        function count3Fn() {
            count3++;
            if (count3 > 7422) {
                clearInterval(cnt3);
            } else {
                $(".big_text:eq(3)").text(count3);
            }
        }
    }
}); */

/*숫자 자동입력*/
$(function () {
    var onoff = false;
    $(window).on('scroll',function(){
        var here = $('#content .business').offset().top -300;
        var scroll = $(window).scrollTop();

        //console.log(here);
        //console.log(scroll);
     if(scroll >= here && onoff == false){
        onoff = true;

        var memberCountConTxt = 50;
        $({
            val: 0
        }).animate({
            val: memberCountConTxt
        }, {
            duration: 2000,
            step: function () {
                var number = numberWithCommas(Math.floor(this.val));
                $(".big_text:eq(0)").text(number);
            },
            complete: function () {
                var number = numberWithCommas(Math.floor(this.val));
                $(".big_text:eq(0)").text(number);
            }
        });

        var memberCountConTxt = 50273;
        $({
            val: 0
        }).animate({
            val: memberCountConTxt
        }, {
            duration: 2500,
            step: function () {
                var number = numberWithCommas(Math.floor(this.val));
                $(".big_text:eq(1)").text(number);
            },
            complete: function () {
                var number = numberWithCommas(Math.floor(this.val));
                $(".big_text:eq(1)").text(number);
            }
        });

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }


        var memberCountConTxt = 48095;
        $({
            val: 0
        }).animate({
            val: memberCountConTxt
        }, {
            duration: 3000,
            step: function () {
                var number = numberWithCommas(Math.floor(this.val));
                $(".big_text:eq(2)").text(number);
            },
            complete: function () {
                var number = numberWithCommas(Math.floor(this.val));
                $(".big_text:eq(2)").text(number);
            }
        });

        var memberCountConTxt = 7422;
        $({
            val: 0
        }).animate({
            val: memberCountConTxt
        }, {
            duration: 3500,
            step: function () {
                var number = numberWithCommas(Math.floor(this.val));
                $(".big_text:eq(3)").text(number);
            },
            complete: function () {
                var number = numberWithCommas(Math.floor(this.val));
                $(".big_text:eq(3)").text(number);
            }
        });
     }
    });  
});