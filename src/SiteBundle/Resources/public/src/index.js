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




  debug();
});


function debug() {

  Draggable.create("ul.primary", {type:"x", edgeResistance:0.65, bounds:"nav", throwProps:true});
  //Draggable.create("#landscapes", {type:"x,y", edgeResistance:0.65, bounds:"nav", throwProps:true});

}
