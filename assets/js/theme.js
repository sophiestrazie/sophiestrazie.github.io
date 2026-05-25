/* ============================================================
 * theme.js — dark-mode toggle with localStorage persistence
 *
 * Flow:
 *   1. _includes/head.html runs a tiny inline script that reads
 *      localStorage and sets data-theme BEFORE first paint (no flash).
 *   2. This file (deferred) wires up the toggle button.
 *
 * Storage key: 'theme' = 'light' | 'dark' | (absent → system pref)
 * ============================================================ */

(function () {
  'use strict';

  var root = document.documentElement;
  var toggle = document.querySelector('[data-theme-toggle]');
  var iconLight = document.querySelector('[data-theme-icon-light]');
  var iconDark = document.querySelector('[data-theme-icon-dark]');

  if (!toggle) return;

  function currentTheme() {
    var explicit = root.getAttribute('data-theme');
    if (explicit === 'dark' || explicit === 'light') return explicit;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark' : 'light';
  }

  function updateIcons(theme) {
    if (!iconLight || !iconDark) return;
    if (theme === 'dark') {
      iconLight.hidden = true;
      iconDark.hidden = false;
    } else {
      iconLight.hidden = false;
      iconDark.hidden = true;
    }
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) { /* private mode */ }
    updateIcons(theme);
  }

  // Initial icon state
  updateIcons(currentTheme());

  // Enable CSS transitions only after first paint
  requestAnimationFrame(function () {
    document.body.classList.add('theme-ready');
  });

  toggle.addEventListener('click', function () {
    setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
  });
})();
