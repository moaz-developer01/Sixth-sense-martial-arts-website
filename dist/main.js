(function () {
  "use strict";

  var yearEl = document.getElementById("copyright-year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.getElementById("primary-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });
  }

  var dropdown = document.querySelector(".dropdown");
  var dropdownToggle = document.querySelector(".dropdown-toggle");
  var dropdownMenu = document.getElementById("programs-menu");

  function closeDropdown() {
    if (!dropdownMenu || !dropdownToggle) return;
    dropdownMenu.classList.remove("is-open");
    dropdownToggle.setAttribute("aria-expanded", "false");
  }

  function openDropdown() {
    if (!dropdownMenu || !dropdownToggle) return;
    dropdownMenu.classList.add("is-open");
    dropdownToggle.setAttribute("aria-expanded", "true");
  }

  if (dropdown && dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener("click", function () {
      var isOpen = dropdownToggle.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeDropdown();
      } else {
        openDropdown();
      }
    });

    document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target)) {
        closeDropdown();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeDropdown();
        dropdownToggle.focus();
      }
    });
  }

  function handleFormSubmit(formId, statusId, message) {
    var form = document.getElementById(formId);
    var status = document.getElementById(statusId);
    if (!form || !status) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      status.textContent = message;
      form.reset();
    });
  }

  handleFormSubmit(
    "trial-form",
    "trial-form-status",
    "Thanks! We will text or call you shortly to schedule your free trial."
  );

  var track = document.getElementById("discipline-track");
  var dotsWrap = document.getElementById("discipline-dots");

  if (track && dotsWrap) {
    var dots = Array.prototype.slice.call(dotsWrap.querySelectorAll(".carousel-dot"));
    var cards = Array.prototype.slice
      .call(track.children)
      .filter(function (card) { return card.getAttribute("aria-hidden") !== "true"; });

    dots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        var card = cards[index];
        if (card) {
          track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
        }
      });
    });

    var scrollTimer;
    track.addEventListener("scroll", function () {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function () {
        var trackLeft = track.scrollLeft;
        var closestIndex = 0;
        var closestDistance = Infinity;
        cards.forEach(function (card, index) {
          var distance = Math.abs((card.offsetLeft - track.offsetLeft) - trackLeft);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });
        dots.forEach(function (dot, index) {
          var isActive = index === closestIndex;
          dot.classList.toggle("is-active", isActive);
          dot.setAttribute("aria-selected", String(isActive));
        });
      }, 100);
    });
  }
})();
