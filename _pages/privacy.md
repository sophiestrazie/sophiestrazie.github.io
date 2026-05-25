---
layout: page
title: "Privacy"
eyebrow: "What this site collects"
subtitle: "Short version — nothing until you say yes, and not much even then."
permalink: /privacy/
---

## What gets collected

When you visit this site, **nothing about you is sent to a third-party
tracker** unless you click "Accept analytics" on the cookie banner shown
on your first visit. If you click "Essentials only" (or close the banner
without choosing), the site loads no analytics scripts at all.

If you do accept, two services run:

**Google Analytics 4** — aggregate page view counts, referring domain,
country-level location, browser and device class. IP addresses are
anonymized at collection. Google Signals (cross-device tracking tied to
your Google account) and ad personalization are both explicitly disabled.
Data is retained for 14 months, then deleted.

**PostHog (EU instance)** — event-level data on the same page views, plus
optional session replay with all form inputs masked. Hosted on EU servers
(`eu.i.posthog.com`) so the data does not leave the EU. PostHog respects
the browser's "Do Not Track" header; if you've set DNT, no events are sent
even after you click "Accept."

Neither service is used to build advertising profiles or to identify
individual visitors.

## Why both

Google Analytics gives the high-level traffic picture that's still the
standard reference point in academic settings. PostHog gives event-level
detail useful for understanding what readers actually do on the site —
which sections of a long page they reach, which publication links they
click — without sending that data to an ad network.

## How to change your mind

Click "**Cookie preferences**" in the footer of any page. That clears the
stored choice and re-shows the banner so you can pick again. Clearing
your browser's site data for this domain has the same effect.

## What I don't do

- No advertising trackers, no remarketing pixels, no fingerprinting.
- No selling or sharing of analytics data.
- No newsletter sign-up forms that capture email addresses for marketing.
- No third-party comments, embeds, or widgets that load before consent.

## Contact

If you have a question about any of this, or you'd like your analytics
data deleted, email me at
<a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>. I'm
the sole controller of this site's data and can action requests directly.

Last updated: {{ site.time | date: "%B %Y" }}.
