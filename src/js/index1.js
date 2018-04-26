
$(function(){
    $('#info-one li').click(function(){
        var $this = $(this);
        if($this.hasClass('active')){
            $this.children('i').css('background-color','#1AE2C0').siblings().children('i').css('background-color','transparent')
            $this.children('a').css("background-color","rgba(0,0,0,0.4)").siblings().children('a').css("background-color","rgba(0,0,0,0.7)")
            return false;
        }
        $this.addClass('active').siblings().removeClass('active');
        $this.siblings().children('i').css('background-color','transparent');
        $this.siblings().children('a').css("background-color","rgba(0,0,0,0.7)")
        $this.children('i').css('background-color','#1AE2C0');
        $this.children('a').css("background-color","rgba(0,0,0,0.4)");
        /*进入的页签对应的内容要显示*/
        $('#info-two .main').eq($this.index()).addClass('selected').siblings().removeClass('selected');
    });

    $('#answer li').mouseenter(function(){
        $("#answer li").removeClass("li_hover");
        $(this).addClass("li_hover");
        $("#answer li div").removeClass("div_hover");
        $(this).children("div").addClass("div_hover");
        var $this=$(this);

        //console.log($(this).index());
        var index=$this.index();
        var li=$('#hexBox').find('li');
        $('#hexBox').find('li').find('div').css('background-color','rgba(0,0,0,0.6)');
        if(index==0){
               $('#hexBox').find('li').find('h1').css('color','rgba(255,255,255,0.5)');
                $('#hexBox').find('li').eq(0).find('div').css('background-color','rgba(255,255,255,0.8)');
                $('#hexBox').find('li').eq(0).find('h1').css('color','#2f7de1');
                $('#hexBox').find('li').eq(7).find('div').css('background-color','rgba(255,255,255,0.8)');
            $('#hexBox').find('li').eq(7).find('h1').css('color','#2f7de1');
                $('#hexBox').find('li').eq(8).find('div').css('background-color','rgba(255,255,255,0.8)');
            $('#hexBox').find('li').eq(8).find('h1').css('color','#2f7de1');
        }else if(index==1){
            $('#hexBox').find('li').find('h1').css('color','rgba(255,255,255,0.5)');
            $('#hexBox').find('li').eq(1).find('div').css('background-color','rgba(255,255,255,0.8)');
            $('#hexBox').find('li').eq(9).find('div').css('background-color','rgba(255,255,255,0.8)');
            $('#hexBox').find('li').eq(1).find('h1').css('color','#2f7de1');
            $('#hexBox').find('li').eq(9).find('h1').css('color','#2f7de1');
        }else if(index==2){
            $('#hexBox').find('li').find('h1').css('color','rgba(255,255,255,0.5)');
            $('#hexBox').find('li').eq(2).find('div').css('background-color','rgba(255,255,255,0.8)');
            $('#hexBox').find('li').eq(10).find('div').css('background-color','rgba(255,255,255,0.8)');
            $('#hexBox').find('li').eq(2).find('h1').css('color','#2f7de1');
            $('#hexBox').find('li').eq(10).find('h1').css('color','#2f7de1');
        }else if(index==3){
            $('#hexBox').find('li').find('h1').css('color','rgba(255,255,255,0.5)');
            $('#hexBox').find('li').eq(3).find('div').css('background-color','rgba(255,255,255,0.8)');
            $('#hexBox').find('li').eq(11).find('div').css('background-color','rgba(255,255,255,0.8)');
            $('#hexBox').find('li').eq(3).find('h1').css('color','#2f7de1');
            $('#hexBox').find('li').eq(11).find('h1').css('color','#2f7de1');
        }else if(index==4){
            $('#hexBox').find('li').find('h1').css('color','rgba(255,255,255,0.5)');
            $('#hexBox').find('li').eq(4).find('div').css('background-color','rgba(255,255,255,0.8)');
            $('#hexBox').find('li').eq(12).find('div').css('background-color','rgba(255,255,255,0.8)');
            $('#hexBox').find('li').eq(4).find('h1').css('color','#2f7de1');
            $('#hexBox').find('li').eq(12).find('h1').css('color','#2f7de1');
        }else if(index==5){
            $('#hexBox').find('li').find('h1').css('color','rgba(255,255,255,0.5)');
            $('#hexBox').find('li').eq(5).find('div').css('background-color','rgba(255,255,255,0.8)');
            $('#hexBox').find('li').eq(6).find('div').css('background-color','rgba(255,255,255,0.8)');
            $('#hexBox').find('li').eq(13).find('div').css('background-color','rgba(255,255,255,0.8)');
            $('#hexBox').find('li').eq(14).find('div').css('background-color','rgba(255,255,255,0.8)');
            $('#hexBox').find('li').eq(5).find('h1').css('color','#2f7de1');
            $('#hexBox').find('li').eq(6).find('h1').css('color','#2f7de1');
            $('#hexBox').find('li').eq(13).find('h1').css('color','#2f7de1');
            $('#hexBox').find('li').eq(14).find('h1').css('color','#2f7de1');
        }
    })
})

