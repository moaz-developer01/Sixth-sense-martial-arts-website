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

  var accordion = document.getElementById("faq-accordion");
  if (accordion) {
    var triggers = Array.prototype.slice.call(accordion.querySelectorAll(".accordion-trigger"));

    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        var panel = document.getElementById(trigger.getAttribute("aria-controls"));
        var isOpen = trigger.getAttribute("aria-expanded") === "true";

        triggers.forEach(function (other) {
          if (other !== trigger) {
            other.setAttribute("aria-expanded", "false");
            var otherPanel = document.getElementById(other.getAttribute("aria-controls"));
            if (otherPanel) otherPanel.hidden = true;
          }
        });

        trigger.setAttribute("aria-expanded", String(!isOpen));
        if (panel) panel.hidden = isOpen;
      });
    });
  }
})();
