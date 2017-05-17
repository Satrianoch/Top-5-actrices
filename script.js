$(document).ready(function()
{
  var $mainMenuItems = $('#main-menu ul').children('li'),
      openedIndex = -1,
      init = function()
      {
        $mainMenuItems.children('.images').click(function()
        {
          var newIndex = $(this).parent().index(),
							$item = $mainMenuItems.eq(newIndex);
					if(openedIndex === newIndex)
					{
						animateItem($item, false, 250);
						openedIndex = -1;
					}
					else
					{
						animateItem($mainMenuItems.eq(openedIndex), false, 250);
						openedIndex = newIndex;
						animateItem($item, true, 250);
					}
        });
      },
			
			animateItem = function($item, toOpen, speed)
			{
				 var $colorImage = $item.find('.color'),
						 itemParam = toOpen ? {width: '420px'} : {width: '140px'},
						 colorImageParam = toOpen ? {left: '0px'} : {left: '140px'};
         $colorImage.animate(colorImageParam, speed);
         $item.animate(itemParam, speed); 
			};
	
  init();

});