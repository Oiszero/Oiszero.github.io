
$(function() {
    $(document).ready(function () {
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
            scrollBar: true,//是否包含滚动条，默认为false,若为true浏览器自带滚动条出现
            scrollOverflow: true,//内容超过满屏后是否显示滚动条，true则显示滚动条，若需滚动查看内容还需要jquery.slimscroll插件的配合
            scrollingSpeed: 500,
            controlArrows:true,
			dragAndMove:true,
            loopBottom:true,
            scrollOverflow:true,
            onLeave: function (index, nextIndex, direction) {
                console.log(index, nextIndex)
                if (nextIndex == 4 || nextIndex == 5 || nextIndex == 6) {
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
                        $(".qr").css("marginBottom", "50px");
                    }
                    else {
                        $(".next_page").show()
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
滚动条插件
        $("#inner-content").slimScroll({
            width: '100%', //可滚动区域宽度
            height: '100%', //可滚动区域高度
            size: '10px', //滚动条宽度，即组件宽度
            color: '#000', //滚动条颜色
            position: 'right', //组件位置：left/right
            distance: '0px', //组件与侧边之间的距离
            start: 'top', //默认滚动位置：top/bottom
            opacity: .4, //滚动条透明度
            alwaysVisible: true, //是否 始终显示组件
            disableFadeOut: false, //是否 鼠标经过可滚动区域时显示组件，离开时隐藏组件
            railVisible: true, //是否 显示轨道
            railColor: '#333', //轨道颜色
            railOpacity: .2, //轨道透明度
            railDraggable: true, //是否 滚动条可拖动
            railClass: 'slimScrollRail', //轨道div类名
            barClass: 'slimScrollBar', //滚动条div类名
            wrapperClass: 'slimScrollDiv', //外包div类名
            allowPageScroll: true, //是否 使用滚轮到达顶端/底端时，滚动窗口
            wheelStep: 20, //滚轮滚动量
            touchScrollStep: 200, //滚动量当用户使用手势
            borderRadius: '7px', //滚动条圆角
            railBorderRadius: '7px' //轨道圆角
        });

})