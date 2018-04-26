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
  })
	
});