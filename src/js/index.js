$(document).ready(function() {
  $('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: true,
		anchors:['firstPage', 'secondPage'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide', 'forthSlide'],
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
          if (nextIndex == 2 ) {
$(".OnlyFourSshow").show()
          if (index > nextIndex) {
              $('#current_num').html(index - 1);}
          } else {
              $('#current_num').html(nextIndex);
          }
      }
  });
    $('.next_page').on('click', function () {
        $.fn.fullpage.moveSectionDown();
    })


})