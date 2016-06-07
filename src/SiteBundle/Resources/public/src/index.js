import Navigation from './modules/Navigation';
import BarbaWrapper from './modules/BarbaWrapper';
import Gallery from './modules/Gallery';

$(document).ready(function () {

  /**
   * Initializes Hamburger + Mainmenu
   * with Event Listeners */
  let galleryContainer = $('.barba-container');
  const navi = new Navigation();
  let gallery = new Gallery();
  let barba = new BarbaWrapper(navi, gallery);
  gallery.setupTitleImages();
  gallery.update(galleryContainer);


  debug(barba);
});
let activeId = 0;


function debug() {
  const easing = Power2.EaseInOut;
  const slideSpeed  = 0.5;
  const itemWidth = $(window).width();
  let swipeDir;
  let $navigationItem = $('ul.primary li');
  let itemCount = $navigationItem.length;
  let $navigationItems = $('ul.primary');

  $navigationItems.css({'width': (itemWidth * itemCount) + 'px'});


  Draggable.create($navigationItems, {
    type: "x",
    edgeResistance: 0.9,
    dragResistance: 0.0,
    bounds: ".nav__inner",
    onDrag: updateDirections,
    onThrowUpdate: updateDirections,
    throwProps: true,
    onDragStart: function(e) {},
    onDragEnd: function() {
      if (swipeDir == 'left') { activeId++ }
      else if (swipeDir == 'right') { activeId-- };

      navigateSlide();
    }
  });

  function navigateSlide() {
    if (activeId >= itemCount-1) activeId = itemCount-1;
    if (activeId < 0) activeId = 0;

    var xTarget = ((activeId * itemWidth) * -1);



    TweenMax.to($navigationItems, slideSpeed, {x: xTarget, ease: easing, onComplete: slideDone});
  }

  function slideDone() {

  }

  function updateDirections() {
    swipeDir = this.getDirection("start");
  }



  $navigationItem.mousedown(function(e) {
    activeId = $(this).attr('id').split('_')[1];

    $(this).removeClass('grab');
    $(this).addClass('grabbing');

  });

  //
  $navigationItem.mouseenter(function() {
    $(this).removeClass('grabbing');
    $(this).addClass('grab');
  });

  $navigationItem.mouseup(function() {
    $(this).removeClass('grabbing');
    $(this).addClass('grab');
  });

  //Draggable.create("#landscapes", {type:"x,y", edgeResistance:0.65, bounds:"nav", throwProps:true});

}
