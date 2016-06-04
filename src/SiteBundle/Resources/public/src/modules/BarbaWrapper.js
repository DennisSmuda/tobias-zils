
export default class BarbaWrapper {
  constructor(menu) {
    this.menu = menu;
    this.setupTransition();

    console.log(this.menu.isActive());
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

        $el.animate({ opacity: 1 }, 400, function() {
          if (_this.menu.isActive()) {
            _this.menu.toggleMenu();
          }
          _this.done();
        });
      }
    });

    Barba.Pjax.getTransition = function() {
      return FadeTransition;
    };


    Barba.Pjax.start();
  }
}


