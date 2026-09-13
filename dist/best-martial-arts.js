(function () {
  "use strict";

  /* ---------- FAQ accordion ---------- */
  Array.prototype.slice
    .call(document.querySelectorAll(".bl-faq-trigger"))
    .forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        var panel = document.getElementById(trigger.getAttribute("aria-controls"));
        var isOpen = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", String(!isOpen));
        if (panel) panel.hidden = isOpen;
      });
    });

  /* ---------- Reading progress bar ---------- */
  var fill = document.getElementById("ap-progress-fill");
  var article = document.querySelector(".ap-body");

  if (fill && article) {
    var ticking = false;

    function updateProgress() {
      var box = article.getBoundingClientRect();
      var start = window.scrollY + box.top;
      var travel = box.height - window.innerHeight;
      var pct = travel <= 0 ? 1 : (window.scrollY - start) / travel;
      if (pct < 0) pct = 0;
      if (pct > 1) pct = 1;
      fill.style.width = (pct * 100).toFixed(2) + "%";
      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateProgress);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateProgress();
  }

  /* ---------- Table of contents: highlight the section in view ---------- */
  var links = Array.prototype.slice.call(
    document.querySelectorAll(".ap-toc a[href^='#']")
  );

  if (links.length && "IntersectionObserver" in window) {
    var byId = {};
    var headings = [];

    links.forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      var heading = document.getElementById(id);
      if (heading) {
        byId[id] = link;
        headings.push(heading);
      }
    });

    var visible = [];

    function setActive(id) {
      links.forEach(function (link) {
        link.classList.toggle("is-active", link === byId[id]);
      });
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var id = entry.target.id;
          var i = visible.indexOf(id);
          if (entry.isIntersecting && i === -1) visible.push(id);
          if (!entry.isIntersecting && i !== -1) visible.splice(i, 1);
        });

        if (visible.length) {
          // the topmost heading currently in the band wins
          var top = headings
            .filter(function (h) { return visible.indexOf(h.id) !== -1; })
            .map(function (h) { return h.id; })[0];
          if (top) setActive(top);
        }
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach(function (heading) {
      observer.observe(heading);
    });

    setActive(headings.length ? headings[0].id : null);
  }
})();
