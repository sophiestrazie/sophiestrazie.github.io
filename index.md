---
layout: home
title: "S.E. Strassmann"
description: "Interdisciplinary researcher in human capital economics and computational social science."
permalink: /
---

<section class="hero">
  <div class="hero__intro">
    <p class="section__eyebrow">Welcome</p>
    <h1 class="hero__headline">
      Sophie <em>Strassmann-Peña</em>
    </h1>
    <p class="hero__role">
      Researcher · Mindful Human Capital ·
      Incoming Graduate Student, Political Economy, Université de Montréal
    </p>
    <p class="hero__lede">
      I study how knowledge-producing institutions adopt, or fail to adopt,
      computational methods. My work sits at the intersection of human-capital
      economics, computational social science, and the political economy of
      methodological change, with applied threads in Indigenous economic
      measurement and algorithmic fairness in employment systems.
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
         alt="Portrait of Sophie Strassmann-Peña"
         onerror="this.style.display='none'">
  </div>
</section>

<!-- ===================================================================
     Research snapshot
     =================================================================== -->
<section class="section">
  <p class="section__eyebrow">Current Research</p>
  <h2 class="section__title">The adoption lag of computational methods in economics</h2>

  <p style="font-size: var(--fs-md); max-width: 65ch;">
    Diffusion of innovations theory predicts that methods offering clear productivity
    advantages spread quickly through professional communities. Computational methods —
    machine learning, NLP, neural networks — have done so in many fields, but remain
    marginal in economics. <em>Why?</em>
  </p>

  <p style="max-width: 65ch;">
    My dissertation treats this as a problem of institutional resistance to technical
    change. I'm building a bibliometric dataset that measures, for the first time,
    the lag between when a method appears in computer science and when it appears in
    social-science publications, paired with primary survey work on the cognitive,
    institutional, and pedagogical barriers to adoption.
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
        neurodiversity-affirming. Free consult.
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
