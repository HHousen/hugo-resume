(function($) {
  "use strict"; // Start of use strict

  function decodeObfuscatedEmail(value) {
    var cleanValue = value.replace(/~/g, '');
    var rotation = 8 % cleanValue.length;

    if (rotation) {
      cleanValue = cleanValue.slice(-rotation) + cleanValue.slice(0, -rotation);
    }

    cleanValue = cleanValue.replace(/.{4}/g, function(chunk) {
      return chunk.split('').reverse().join('');
    });

    return atob(cleanValue);
  }

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  // Restore obfuscated email text and mailto links on the home page.
  document.querySelectorAll('.js-email-link').forEach(function(link) {
    var encodedEmail = link.getAttribute('data-email');

    if (!encodedEmail) {
      return;
    }

    try {
      var email = decodeObfuscatedEmail(encodedEmail);
      link.setAttribute('href', 'mailto:' + email);

      link.querySelectorAll('.js-email-text').forEach(function(textNode) {
        textNode.textContent = email;
      });
    } catch (error) {
      // Keep the placeholder fallback when decoding fails.
    }
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict
