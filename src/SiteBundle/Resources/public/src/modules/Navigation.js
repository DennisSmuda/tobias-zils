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
    this.lastTitle = '';
  }

  onClick() { toggleMenu(); }

  toggleMenu() { toggleMenu(); }

  isActive() { return isMenuActive; }

  transition(title) {
    this.lastTitle = title;
    let $el = $(`#${title}`);
    TweenMax.fromTo($el, 1.2, { scale: 1}, { scale: 2.5}  )
  }

  reset() {
    let $el = $(`#${this.lastTitle}`);
    TweenMax.to($el, 0.1, { scale: 1, delay: 0.8});
  }
}

function toggleMenu() {
  isMenuActive = !isMenuActive;
  $topLine.toggleClass('active');
  $bottomLine.toggleClass('active');
  $middleLine.toggleClass('active');


  if (isMenuActive) {
    TweenMax.to($nav, 1, {autoAlpha: 1, ease: Expo.easeOut});
  } else {
    TweenMax.to($nav, 1, {autoAlpha: 0, onComplete: function() {
      $nav.css('visibility', 'hidden');
    }});
  }


}