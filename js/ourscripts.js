$(document).ready(function() {
    $(".smWrapper").mouseenter(
        function() {
            // If any other buttons are currently displayed, fade them out
            $(".smWrapper").each(function(index) {
              var button = $(this).find(".smFadeIn");
              if (button.is(':visible')) {
                  button.fadeOut('slow');
              }
            });
            // Get respective social media fadeIn
            var button = $(this).find(".smFadeIn");
            button.fadeIn('slow');
        }
    );
    $(".smWrapper").mouseleave(
        function() {
            $this = $(this);
            setTimeout(function() {
                // Get respective social media fadeIn
                var button = $this.find(".smFadeIn");
                if (!button.is(":hover")) {
                    button.fadeOut('slow');
                }
            }, 300);
        }
    );
});
