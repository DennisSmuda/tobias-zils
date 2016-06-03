let $topLine = $('svg#hamburger #top');
let $middleLine = $('svg#hamburger #middle');
let $bottomLine = $('svg#hamburger #bottom');
let $svg = $('svg#hamburger');
let $nav = $('nav');

// Control Variables
let isMenuActive = false;



export default class Hamburger {

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
}

function toggleMenu() {
  console.log('toggleMenu');
  isMenuActive = !isMenuActive;
  $topLine.toggleClass('active');
  $nav.toggleClass('active');
  $bottomLine.toggleClass('active');
  $middleLine.toggleClass('active');
}