
const apiKey = '1418194638ebca1a4c43c2e3d2795d39';
const userId = '24527918@N07';

const streetId = '72157647569796794';
const landscapeId = '72157654896797852';
const peopleId = '72157651326724346';

// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)


export default class Gallery {
  constructor() {
    this.flickr = new Flickr({
      api_key: apiKey,
      user_id: userId
    });
  }

  getPeople() {
    this.flickr.photosets.getPhotos({
      api_key: this.flickr.flickrOptions.api_key,
      user_id: this.flickr.flickrOptions.user_id,
      page: 1,
      per_page: 500,
      photoset_id: peopleId,

    }, function (err, result) {
      if (err) {
        throw new Error(err);
      }

      const photos = result.photoset.photo;
      // Output all Photos on screen
      photos.forEach((photo, i) => {
        let photoUrl = `<img src="http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg">`;
        $(photoUrl).appendTo('#images');
      });
    });
  }

  getLandscape() {
    this.flickr.photosets.getPhotos({
      api_key: this.flickr.flickrOptions.api_key,
      user_id: this.flickr.flickrOptions.user_id,
      page: 1,
      per_page: 500,
      photoset_id: landscapeId,

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

  getStreet() {
    this.flickr.photosets.getPhotos({
      api_key: this.flickr.flickrOptions.api_key,
      user_id: this.flickr.flickrOptions.user_id,
      page: 1,
      per_page: 500,
      photoset_id: streetId,

    }, function (err, result) {
      if (err) { throw new Error(err); }

      const photos = result.photoset.photo;
      photos.forEach((photo, i) => {
        console.log(photo);

        let photoUrl = `<img src="http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg">`;
        $(photoUrl).appendTo('#images');
      });
    });
  }

  update($el) {
    console.log($el);
    if ($el.hasClass('street')) {
      this.getStreet();
    } else if ($el.hasClass('landscapes')) {
      this.getLandscape();
    } else if ($el.hasClass('people')) {
      this.getPeople();
    }
  }

}






