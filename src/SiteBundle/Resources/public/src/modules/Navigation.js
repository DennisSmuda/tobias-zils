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

  onClick() { toggleMenu(); }

  toggleMenu() { toggleMenu(); }

  isActive() { return isMenuActive; }
}

function toggleMenu() {
  isMenuActive = !isMenuActive;
  $topLine.toggleClass('active');
  $bottomLine.toggleClass('active');
  $middleLine.toggleClass('active');


  if (isMenuActive) {
    TweenMax.to($nav, 1, {autoAlpha: 1, y: 0, ease: Expo.easeOut});
  } else {
    TweenMax.to($nav, 1, {autoAlpha: 0.1, y: -window.innerHeight, ease: Expo.easeOut});
  }
}