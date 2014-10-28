/**
 * Add lazy events for scroll and resize
 */
(function($) {
  var opt = $.extend({
    timeout: 250, // How often the event can fire in milliseconds
    realEvents: ['scroll', 'resize'],
    prefix: 'lazy'
  }, LazyEventConfig);

  timers = {};

  // Handle a real event
  beLazy = function(event) {
    // If there's no timer for this event
    if (!timers[event.type]) {
      // Create a timer for this event
      timers[event.type] = window.setTimeout(function() {
        // Once the timer ticks, clear the timer
        timers[event.type] = null;
        // And trigger lazy event
        $(window).trigger(opt.prefix + event.type);
      }, opt.timeout);
    }
  }

  // Watch the real events to trigger lazy events
  for (var i = opt.realEvents.length - 1; i >= 0; i--) {
    $(window).on(opt.realEvents[i], beLazy);
  }
})(jQuery);

