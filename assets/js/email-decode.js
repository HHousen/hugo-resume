(function() {
  "use strict";

  function decodeObfuscatedEmail(value) {
    var cleanValue = value.replace(/~/g, "");
    var rotation = 8 % cleanValue.length;

    if (rotation) {
      cleanValue = cleanValue.slice(-rotation) + cleanValue.slice(0, -rotation);
    }

    cleanValue = cleanValue.replace(/.{4}/g, function(chunk) {
      return chunk.split("").reverse().join("");
    });

    return atob(cleanValue);
  }

  document.querySelectorAll(".js-email-link").forEach(function(link) {
    var encodedEmail = link.getAttribute("data-email");

    if (!encodedEmail) {
      return;
    }

    try {
      var email = decodeObfuscatedEmail(encodedEmail);
      link.setAttribute("href", "mailto:" + email);

      link.querySelectorAll(".js-email-text").forEach(function(textNode) {
        textNode.textContent = email;
      });
    } catch (error) {
      // Keep the placeholder fallback when decoding fails.
    }
  });
})();
