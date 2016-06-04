import Navigation from './modules/Navigation';
import BarbaWrapper from './modules/BarbaWrapper';

$(document).ready(function () {

  /**
   * Initializes Hamburger + Mainmenu
   * with Event Listeners */
  const navi = new Navigation();
  let barba = new BarbaWrapper(navi);

  showpics();

  //debug();
});



const apiKey = '1418194638ebca1a4c43c2e3d2795d39';
const userId = '24527918@N07';

const streetId = '72157647569796794';
const landscapeId = '72157654896797852';

function showpics() {

  var flickr = new Flickr({
    api_key: apiKey,
    user_id: userId
  });


  flickr.photosets.getPhotos({
    api_key: flickr.flickrOptions.api_key,
    user_id: flickr.flickrOptions.user_id,
    page: 1,
    per_page: 500,
    photoset_id: landscapeId,

  }, function (err, result) {
    if (err) {
      throw new Error(err);
    }

    console.log(result);
  });

  //flickr.galleries.getList({
  //  api_key: flickr.flickrOptions.api_key,
  //  user_id: flickr.flickrOptions.user_id,
  //  authenticated: true,
  //
  //  gallery_id: streetId
  //}, function(err, result) {
  //  if (err) {throw new Error(err)};
  //  console.log(result);
  //});
};


function debug() {
  let $box = $('.debug-box');
  TweenLite.fromTo($box, 2, {x: '0px'}, {
    x: 150,
    ease: Power4.easeInOut,
  });

}