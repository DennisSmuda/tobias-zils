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
  gallery.getTitleImages();
  gallery.update(galleryContainer);




  //debug();
});

