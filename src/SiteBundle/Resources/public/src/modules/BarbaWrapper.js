
export default class BarbaWrapper {
  constructor(menu) {
    this.menu = menu;
    this.setupTransition();
  }

  setupTransition() {

    var FadeTransition = Barba.BaseTransition.extend({
      menu : this.menu,

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
          if (_this.menu.isActive()) {
            _this.menu.toggleMenu();
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


