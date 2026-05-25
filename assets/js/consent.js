/* ============================================================
 * consent.js — Law 25 / GDPR-compliant consent for analytics
 *
 * Flow:
 *   1. On every page load, check localStorage for a stored choice.
 *      - "accept"     → call window.__loadAnalytics() (loads GA + PostHog)
 *      - "essentials" → load nothing tracking-related
 *      - (no value)   → show the banner
 *   2. Clicking a banner button persists the choice and acts on it.
 *   3. The footer "Cookie preferences" link clears the choice and
 *      reloads the page, re-presenting the banner.
 *
 * Storage:
 *   key   = 'consent'
 *   value = 'accept' | 'essentials' | 'reject'
 *   We treat 'reject' identically to 'essentials' at runtime; we just
 *   record which button was clicked so future audits know.
 * ============================================================ */

(function () {
  'use strict';

  var STORAGE_KEY = 'consent';
  var banner = document.getElementById('consent-banner');

  function getStored() {
    try { return localStorage.getItem(STORAGE_KEY); }
    catch (e) { return null; /* private mode */ }
  }

  function setStored(value) {
    try { localStorage.setItem(STORAGE_KEY, value); }
    catch (e) { /* private mode — fall through, banner will re-show */ }
  }

  function showBanner() {
    if (banner) banner.hidden = false;
  }

  function hideBanner() {
    if (banner) banner.hidden = true;
  }

  function applyChoice(choice) {
    if (choice === 'accept' && typeof window.__loadAnalytics === 'function') {
      window.__loadAnalytics();
    }
    // For "essentials" / "reject" / null we deliberately do nothing —
    // no trackers, no cookies set by us.
  }

  // ----- Bind banner buttons --------------------------------------
  if (banner) {
    banner.querySelectorAll('[data-consent]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var choice = btn.getAttribute('data-consent');
        setStored(choice);
        hideBanner();
        applyChoice(choice);
      });
    });
  }

  // ----- Bind footer "Cookie preferences" link --------------------
  // Clicking this clears the stored choice and reloads the page, so
  // the banner re-appears and the visitor can change their mind.
  document.querySelectorAll('[data-consent-reset]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      try { localStorage.removeItem(STORAGE_KEY); } catch (err) {}
      window.location.reload();
    });
  });

  // ----- Decide what to do on this page load ----------------------
  var stored = getStored();
  if (stored) {
    applyChoice(stored);
  } else {
    // No decision yet — show the banner. Defer one frame so the rest
    // of the page settles first; avoids a flash of the banner before
    // hero content paints on slow connections.
    requestAnimationFrame(showBanner);
  }
})();
