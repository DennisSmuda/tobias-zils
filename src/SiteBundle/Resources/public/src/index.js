import Navigation from './modules/Navigation';
import BarbaWrapper from './modules/BarbaWrapper';

$(document).ready(function() {

  /**
   * Initializes Hamburger + Mainmenu
   * with Event Listeners */
  let navi = new Navigation();
  let barba = new BarbaWrapper(navi);



  showpics();
});


const apiKey = '1418194638ebca1a4c43c2e3d2795d39';
const userId = '24527918@N07';

function showpics(){

  var flickr = new Flickr({
    api_key: apiKey,
    user_id: userId
  });


  flickr.photos.search({
    text: "red+panda"
  }, function(err, result) {
    if(err) { throw new Error(err); }
    // do something with result
    console.log(result);
  });

  flickr.photos.search({
    user_id: flickr.flickrOptions.user_id,
    page: 1,
    per_page: 500
  }, function(err, result) {
    if (err) { throw new Error(err); }
    console.log(result);
  });

  console.log(flickr);

};