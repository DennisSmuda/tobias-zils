
const apiKey = '1418194638ebca1a4c43c2e3d2795d39';
const userId = '24527918@N07';

const albumIds = {
  "streetId": '72157647569796794',
  "landscapesId": '72157654896797852',
  "peopleId": '72157651326724346'
}

// Image URL
// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)


export default class Gallery {
  constructor() {
    this.flickr = new Flickr({
      api_key: apiKey,
      user_id: userId
    });
  }

  getAlbum(albumName) {
    let idstring = albumName + 'Id';
    let id = albumIds[idstring];

    this.flickr.photosets.getPhotos({
      api_key: this.flickr.flickrOptions.api_key,
      user_id: this.flickr.flickrOptions.user_id,
      page: 1,
      per_page: 500,
      photoset_id: id,

    }, function (err, result) {
      if (err) {
        throw new Error(err);
      }

      const photos = result.photoset.photo;

      photos.forEach((photo, i) => {
        // Render to dom
        let photoUrl = `<img src="http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg">`;
        $(photoUrl).appendTo('#images');
      });
    });
  }

  update($el) {
    if ($el.hasClass('street')) {
      this.getAlbum('street')
    } else if ($el.hasClass('landscapes')) {
      this.getAlbum('landscapes');
    } else if ($el.hasClass('people')) {
      this.getAlbum('people');
    }
  }

  getTitleImages() {

    this.flickr.photos.search({
      api_key: this.flickr.flickrOptions.api_key,
      tags: 'tobias-zils-title'
    }, function(err, result) {
      if(err) { throw new Error(err); }

      const titleImages = result.photos.photo;

      titleImages.forEach((photo, i) => {
        console.log(photo);
        // Render to dom
        let photoUrl = `<img src="http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg">`;
        $(photoUrl).appendTo(`ul.primary li:nth-child(${++i}) a`);
      });
    });
  }

}




