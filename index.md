---
layout: home
title: "Sophie Strassmann | AI, Labor Economics & Human Capital Research"
description: "Sophie Strassmann studies human economic value, bargaining power, and labor policy in an economy where AI performs productive tasks."
permalink: /
---

<section class="hero">
  <div class="hero__intro">
    <p class="section__eyebrow">Welcome</p>
    <h1 class="hero__headline">
      Sophie <em>Strassmann</em>
    </h1>
    <p class="hero__role">
      Researcher · Mindful Human Capital ·
      Incoming Graduate Student, Political Economy, Université de Montréal
    </p>
    <p class="hero__lede">
      I study what determines the economic role, bargaining power, and income of human labor in an economy where machines can perform an increasing share, and potentially all, economically productive tasks. My work sits at the intersection of human-capital economics, labor economics, and the political economy of technological transition, asking what remains scarce, who holds power, and what public policy can and should do, once intelligence itself is no longer a limiting factor of production.
    </p>

    <div class="hero__contacts">
      <a href="mailto:{{ site.author.email }}">✉ {{ site.author.email }}</a>
      <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}/" rel="noopener">→ LinkedIn</a>
      <a href="{{ '/cv/' | relative_url }}">→ CV</a>
      <a href="{{ '/research/' | relative_url }}">→ Research</a>
    </div>
  </div>

  <div class="hero__portrait">
    <!-- Drop your portrait at assets/img/portrait.png. Aspect: square. -->
    <img src="{{ '/assets/img/portrait.jpeg' | relative_url }}"
         alt="Sophie Strassmann, AI and labor economics researcher"
         onerror="this.style.display='none'">
  </div>
</section>

<!-- ===================================================================
     Research snapshot
     =================================================================== -->
<section class="section">
  <p class="section__eyebrow">Current Research</p>
  <h2 class="section__title">What determines human economic value when intelligence is no longer scarce?</h2>

  <p style="font-size: var(--fs-md); max-width: 65ch;">
    For as long as economics has modeled production, human cognitive labor has been
    treated as a scarce, bargaining-relevant input. Artificial intelligence is now
    testing that assumption directly. If machines can eventually perform any
    economically productive task at or above human capability, the question stops
    being how AI changes specific jobs, and becomes something more fundamental:
    <em>what determines the continued economic role, bargaining power, and income
    of human beings at all, and what public policy is equipped, or unequipped,
    to do about it.</em>
  </p>

  <p style="max-width: 65ch;">
    My dissertation takes this as its central question. I approach it from the
    ground up: what are the fundamental factors of production in an economy where
    intelligence is not scarce, what remains genuinely scarce when machine cognition
    can substitute for human judgment across an expanding range of tasks, and where,
    if anywhere, a discoverable threshold exists between AI as complement and AI as
    substitute. The aim is not to describe a trend already underway, but to identify
    the mechanism, and the policy lever, that determines which side of that threshold
    a given task, worker, or institution ends up on.
  </p>

  <p>
    <a class="btn" href="{{ '/research/' | relative_url }}">Read the research statement →</a>
  </p>
</section>

<!-- ===================================================================
     News / recent milestones
     =================================================================== -->
<section class="section">
  <p class="section__eyebrow">News</p>
  <h2 class="section__title">Recently</h2>

  <ul class="news">
    {%- assign news_sorted = site.data.news | sort: "date" | reverse -%}
    {%- for item in news_sorted limit: 5 -%}
      <li class="news__item">
        <span class="news__date">{{ item.date | date: "%b %Y" }}</span>
        <span class="news__text">{{ item.text }}</span>
      </li>
    {%- endfor -%}
  </ul>
</section>

<!-- ===================================================================
     Selected publications (links to full list)
     =================================================================== -->
<section class="section">
  <p class="section__eyebrow">Selected Writing</p>
  <h2 class="section__title">Publications &amp; working papers</h2>

  {%- assign pubs_sorted = site.data.publications | sort: "year" | reverse -%}
  <ul class="pubs">
    {%- for pub in pubs_sorted limit: 4 -%}
      {%- include publication.html pub=pub -%}
    {%- endfor -%}
  </ul>

  <p style="margin-top: var(--sp-5);">
    <a class="btn btn--primary" href="{{ '/research/' | relative_url }}#publications">See all publications →</a>
  </p>
</section>

<!-- ===================================================================
     Secondary tracks: consulting / tutoring (Mindful Human Capital)
     =================================================================== -->
<section class="section">
  <p class="section__eyebrow">Beyond the academy</p>
  <h2 class="section__title">Mindful Human Capital</h2>

  <p style="max-width: 65ch;">
    I run a small practice alongside my research: applied measurement,
    economic literacy education, and one-on-one tutoring for students in
    economics and quantitative methods.
  </p>

  <div class="cards">
    <a href="{{ '/teaching/' | relative_url }}" class="card" style="border-bottom-color: var(--color-rule);">
      <h3 class="card__title">Tutoring</h3>
      <p class="card__body">
        R, statistics, micro/macro, labour economics. Collaborative, adaptive,
        inclusive. Free consult.
      </p>
    </a>
    <a href="{{ '/about/' | relative_url }}" class="card" style="border-bottom-color: var(--color-rule);">
      <h3 class="card__title">About me</h3>
      <p class="card__body">
        Languages, volunteering, mentorship, and the path from McGill economics
        to political-science PhD.
      </p>
    </a>
    <a href="{{ '/cv/' | relative_url }}" class="card" style="border-bottom-color: var(--color-rule);">
      <h3 class="card__title">CV</h3>
      <p class="card__body">
        Full academic and professional record — McGill, Mila, Indigenomics, CAIDP.
      </p>
    </a>
  </div>
</section>