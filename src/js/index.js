$(function(){
	$(document).ready(function() {
        $('#fullpage').fullpage({
            //Navigation
            menu: '#menu',
            lockAnchors: false,
            anchors:['firstPage', 'secondPage', 'thirdPage', 'forthPage', 'fifthPage'],
            navigation: true,
            navigationPosition: 'right',
            // navigationTooltips: ['首页', '第二页', '第三页', '第四页', '第五页'],
            showActiveTooltip: true,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
            scrollingSpeed:500,
            controlArrows: true,
            onLeave: function(index, nextIndex, direction){
                console.log(index, nextIndex)
                if(nextIndex==3||nextIndex==4){
                    $(".next_page").find("a").css("color","#000");
                    $("#scro").attr('src','src/images/down2.png');
                    $("#fp-nav").find("span").css("background","rgb(101,121,145)");
                    $("#fp-nav").find(".active").children("span").css("background","rgba(101,121,145)");
                    $("#fp-nav").find("span").css("background","rgb（0,0,0,0.3）");
                    $("#fp-nav").find(".active").children("span").css("background","#657991");
                    $(".next_page").show()
                }else{
                    if(nextIndex==5){$(".next_page").hide()}
                    else {$(".next_page").show()};
                    $("#fp-nav").find("span").css("background","rgb(255,255,255)");
                    $("#fp-nav").find(".active").children("span").css("background","rgba(255,255,255)");
                    $(".next_page").find("a").css("color","#fff");
                    $("#scro").attr('src','src/images/down.png');
                }
                if(index>nextIndex){
                    $('#current_num').html(index-1);
                }else {
                    $('#current_num').html(nextIndex);
                }
            },
        });
        $('.next_page').on('click', function() {
            $.fn.fullpage.moveSectionDown();
        })
    });
})