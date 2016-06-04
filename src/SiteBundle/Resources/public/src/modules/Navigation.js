let $topLine = $('svg#hamburger #top');
let $middleLine = $('svg#hamburger #middle');
let $bottomLine = $('svg#hamburger #bottom');
let $svg = $('svg#hamburger');
let $nav = $('nav');

// Control Variables
let isMenuActive = false;



export default class Navigation {

  constructor() {
    $svg.on('click', this.onClick);
    $(document).keyup(function(e) {
      if (e.keyCode === 27) toggleMenu();
    });

  }


  onClick() {
    toggleMenu();
  }

  toggleMenu() {
    toggleMenu();
  }

  isActive() {
    return isMenuActive;
  }
}

function toggleMenu() {
  isMenuActive = !isMenuActive;
  $topLine.toggleClass('active');

  if (isMenuActive) {
    TweenMax.to($nav, 0.6, { top: 0 ,autoAlpha: 1, ease: Elastic.easeInOut});
  } else {
    TweenMax.to($nav, 0.6, { top: -window.innerHeight, autoAlpha: 0.1 });
  }
  $bottomLine.toggleClass('active');
  $middleLine.toggleClass('active');
}