// Menu.
var $menu_openers = $('.opener');

// Openers.
  $menu_openers.each(function() {

    var $this = $(this);

    $this.on('click', function(event) {

      // Prevent default.
        event.preventDefault();

      // Toggle.
        $menu_openers.not($this).removeClass('active');
        $this.toggleClass('active');

      // Trigger resize (sidebar lock).
        $window.triggerHandler('resize.sidebar-lock');

    });

  });
  