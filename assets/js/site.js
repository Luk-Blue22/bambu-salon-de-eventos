(function () {
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- Revelado por scroll (secciones, tarjetas) --- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* --- Estrellas de calificacion: se iluminan una por una --- */
  var starGroups = document.querySelectorAll(".rating-stars");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var starObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    starGroups.forEach(function (el) { starObserver.observe(el); });
  } else {
    starGroups.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* --- Contador animado (65 reseñas) --- */
  var counters = document.querySelectorAll(".counter");
  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-target"), 10) || 0;
    if (reduceMotion) { el.textContent = target; return; }
    var duration = 1500;
    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window && !reduceMotion) {
    var counterObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { counterObserver.observe(el); });
  } else {
    counters.forEach(function (el) { el.textContent = el.getAttribute("data-target"); });
  }

  /* --- Barra de navegacion: sombra al hacer scroll --- */
  var headers = document.querySelectorAll("header");
  var navTicking = false;
  function updateHeaderShadow() {
    var scrolled = window.scrollY > 8;
    headers.forEach(function (h) { h.classList.toggle("nav-scrolled", scrolled); });
    navTicking = false;
  }
  window.addEventListener("scroll", function () {
    if (!navTicking) {
      requestAnimationFrame(updateHeaderShadow);
      navTicking = true;
    }
  }, { passive: true });
  updateHeaderShadow();

  /* --- Parallax suave (solo escritorio, imagen del hero) --- */
  var parallaxImg = document.querySelector(".parallax-img");
  if (parallaxImg && !reduceMotion) {
    var desktopQuery = window.matchMedia("(min-width: 768px)");
    var parallaxRaf = null;
    function updateParallax() {
      parallaxRaf = null;
      if (!desktopQuery.matches) {
        parallaxImg.style.transform = "";
        return;
      }
      var offset = window.scrollY * 0.18;
      parallaxImg.style.transform = "translateY(" + offset + "px) scale(1.05)";
    }
    window.addEventListener("scroll", function () {
      if (parallaxRaf === null) parallaxRaf = requestAnimationFrame(updateParallax);
    }, { passive: true });
    window.addEventListener("resize", updateParallax);
    updateParallax();
  }

  /* --- Micro-interaccion tactil en tarjetas (conservada del original) --- */
  document.querySelectorAll("article, .rounded-xl").forEach(function (card) {
    card.addEventListener("touchstart", function () {}, { passive: true });
  });
})();
