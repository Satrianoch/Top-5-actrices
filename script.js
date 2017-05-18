$(document).ready(function()
{
  var $mainMenuItems = $('#main-menu ul').children('li'),
      openedIndex = 2,
      init = function()
      {
				bindEvents();
				animateItem($mainMenuItems.eq(openedIndex), true, 1000);
			},
			
			bindEvents = function()
			{
        $mainMenuItems.children('.images').click(function()
        {
          var newIndex = $(this).parent().index();
					checkAndAnimateItem(newIndex);
        });
				
				$('.button').click(function()
				{
					var newIndex = $(this).index();
					checkAndAnimateItem(newIndex);
				});
      },
			
			animateItem = function($item, toOpen, speed)
			{
				 var $colorImage = $item.find('.color'),
						 itemParam = toOpen ? {width: '420px'} : {width: '140px'},
						 colorImageParam = toOpen ? {left: '0px'} : {left: '140px'};
         $colorImage.animate(colorImageParam, speed);
         $item.animate(itemParam, speed); 
			},
			
			checkAndAnimateItem = function(indexToCheckAndAnimate)
			{
				if(openedIndex === indexToCheckAndAnimate)
					{
						animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 300);
						openedIndex = -1;
					}
					else
					{
						animateItem($mainMenuItems.eq(openedIndex), false, 300);
						openedIndex = indexToCheckAndAnimate;
						animateItem($mainMenuItems.eq(openedIndex), true, 300);
					}	
			}
	
  init();

});