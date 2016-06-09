
export default class BarbaWrapper {
  constructor(navi, gallery) {
    this.navi = navi;
    this.gallery = gallery;
    this.setupTransition();
    this.setupEvents();
  }

  setupEvents() {
    // NAVIGATION on Click
    $('ul.primary li').on('click', (e) => {
      let target = e.target.innerText.toLowerCase();
      this.navi.transition(target);
      Barba.Pjax.goTo(target);
      this.gallery.update(target);
    });
  }

  setupTransition() {

    var FadeTransition = Barba.BaseTransition.extend({
      navi : this.navi,
      gallery: this.gallery,

      start: function() {
          // As soon the loading is finished and the old page is faded out, let's fade the new page
        Promise
          .all([this.newContainerLoading, this.fadeOut()])
          .then(this.fadeIn.bind(this));
      },

      fadeOut: function() {
        return $(this.oldContainer).animate({ opacity: 0 }).promise();
      },

      fadeIn: function() {
        var _this = this;
        var $el = $(this.newContainer);


        $(this.oldContainer).hide();

        $el.css({
          visibility : 'visible',
          opacity : 0
        });

        // Tween Max instead of jquery animate
        TweenMax.to($el, 0.4, {
          opacity: 1,
          onComplete: animationCallback
        });


        function animationCallback() {
          if (_this.navi.isActive()) {
            _this.navi.toggleMenu();
            _this.gallery.update($el);
            _this.navi.reset();
          }
          _this.done();
        }
      }
    });

    Barba.Pjax.getTransition = function() {
      return FadeTransition;
    };


    Barba.Pjax.start();
  }
}


