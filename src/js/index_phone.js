
$(function() {
    $(document).ready(function () {
alert(5)

        $('#fullpage').fullpage({
            //Navigation
            menu: '#menu',
            lockAnchors: false,
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'forthPage', 'fifthPage', 'sixthPage', 'seventhPage'],
            navigation: true,
            navigationPosition: 'right',
            // navigationTooltips: ['首页', '第二页', '第三页', '第四页', '第五页', '第六页', '第七页'],
            showActiveTooltip: true,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
            scrollBar: false,//是否包含滚动条，默认为false,若为true浏览器自带滚动条出现
            scrollOverflow: false,//内容超过满屏后是否显示滚动条，true则显示滚动条，若需滚动查看内容还需要jquery.slimscroll插件的配合
            scrollingSpeed: 500,
            controlArrows:true,
			dragAndMove:true,
            loopBottom:true,
            scrollOverflow:true,
            onLeave: function (index, nextIndex, direction) {
                console.log(index, nextIndex)
                if (nextIndex == 4 || nextIndex == 5 || nextIndex == 6) {
                    var navtop=$(".page3_box").height()+$(".fourpage").height()
                    $(".qr").css("marginBottom", "0px");
                     $(".fp-slidesNav.bottom").css("top",navtop)
                    $(".next_page").find("a").css("color", "#000");
                    $("#scro").attr('src', 'src/images/down2.png');
                    $("#fp-nav").find("span").css("background", "rgb(101,121,145)");
                    $("#fp-nav").find(".active").children("span").css("background", "rgba(101,121,145)");
                    $("#fp-nav").find("span").css("background", "rgb（0,0,0,0.3）");
                    $("#fp-nav").find(".active").children("span").css("background", "#657991");
                    $(".next_page").show()
                } else {
                    if (nextIndex == 7) {
                        $(".next_page").hide();
                        $(".qr").css("marginBottom", "2.2em");
                    }
                    else {
                        $(".next_page").show();
                        $(".qr").css("marginBottom", "0px");
                    }
                    ;
                    $("#fp-nav").find("span").css("background", "rgb(255,255,255)");
                    $("#fp-nav").find(".active").children("span").css("background", "rgba(255,255,255)");
                    $(".next_page").find("a").css("color", "#fff");
                    $("#scro").attr('src', 'src/images/down.png');
                }
                if (index > nextIndex) {
                    $('#current_num').html(index - 1);
                } else {
                    $('#current_num').html(nextIndex);
                }
            },
        });
        $('.next_page').on('click', function () {
            $.fn.fullpage.moveSectionDown();
        })
    });


})