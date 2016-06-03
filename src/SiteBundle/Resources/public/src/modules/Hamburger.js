let $topLine = $('svg#hamburger #top');
let $middleLine = $('svg#hamburger #middle');
let $bottomLine = $('svg#hamburger #bottom');
let $svg = $('svg#hamburger');

// Control Variables
let isMenuActive = false;



export default class Hamburger {
  constructor() {
    $svg.on('mouseenter', this.mouseEnter);
    $svg.on('mouseleave', this.mouseLeave);
    $svg.on('click', this.onClick);
  }

  mouseEnter() {
    if (!isMenuActive) {
      $middleLine.addClass('transparent');
      $topLine.addClass('hover');
      $middleLine.addClass('hover');
    }
  }

  mouseLeave() {
    if (!isMenuActive) {
      $middleLine.removeClass('transparent');
      $topLine.removeClass('hover');
      $middleLine.removeClass('hover');
    }
  }

  onClick() {
    isMenuActive = !isMenuActive;
    $topLine.toggleClass('active');
    $bottomLine.toggleClass('active');
  }
}

