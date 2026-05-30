---
layout: page
title: "Research"
eyebrow: "Research agenda &amp; publications"
subtitle: "Human capital quality in knowledge work, with a focus on computational skills among economists and other social scientists."
permalink: /research/
---

## The Puzzle

Why do knowledge-producing disciplines systematically resist methodological
innovations that demonstrably improve research quality? Diffusion of innovations
theory predicts that techniques offering relative advantage, compatibility, and
observability should spread rapidly through professional communities. In
practice, computational methods that have been routine in computer science for
years, sometimes decades, remain marginal in economics and adjacent fields 
disproportionately occupying positions of responsibility in government.

This pattern resembles what Hall (1993) terms resistance to "third-order
change": paradigmatic shifts that alter not just policy instruments but the
underlying goals and frameworks of a professional community. Disciplines, like
states, develop entrenched paradigms that filter how practitioners interpret
new information and evaluate alternatives.

The puzzle has direct implications for democratic governance. When those 
disciplines cannot engage with the skills reshaping the information their 
advisees rely on, their capacity to govern degrades exactly as policy questions 
grow more complex.

## Research design

My dissertation examines the adoption process of computational methods across
social science disciplines, with a focus on political science and economics. I
frame this as a question of institutional resistance to technological change:
an essential AI Policy coordination problem concerning how professional communities, incentive
structures, and disciplinary norms shape meaningful knowledge production.

### Question 1 — What explains variation in computational adoption across disciplines?

I'm constructing a bibliometric dataset tracking first-use dates of specific
techniques (machine learning classifiers, natural language processing, neural
networks) across disciplinary journals. 

### Question 2 — What mechanisms drive resistance at the individual level?

Using primary survey data from academic, government, and private-sector
researchers, I examine cognitive, institutional, and pedagogical barriers to
skill acquisition. Pilot collaborations with organizations such as Georgetown 
University, the Conference Board of Canada, and the US Federal Reserve,
will inform survey design and provide access to non-academic populations.

### Question 3 — Can targeted interventions accelerate adoption?

Field experiments testing pedagogical approaches will evaluate existing
training programs.

## Supervisor &amp; setting

Expertise in pedagogy, interdisciplinary collaboration, and computational
social science.

<!-- ===================================================================
     Full publications list
     =================================================================== -->
<a id="publications"></a>
<section class="section">
  <p class="section__eyebrow">All publications</p>
  <h2 class="section__title">Publications &amp; working papers</h2>

  {%- assign pubs_sorted = site.data.publications | sort: "year" | reverse -%}
  <ul class="pubs">
    {%- for pub in pubs_sorted -%}
      {%- include publication.html pub=pub -%}
    {%- endfor -%}
  </ul>
</section>

<section class="section">
  <p class="section__eyebrow">Affiliations</p>
  <h2 class="section__title">Past &amp; present</h2>

  <ul>
    <li><strong>Université de Montréal</strong> — incoming graduate studies </li>
    <li><strong>Mila — Quebec Artificial Intelligence Institute</strong> — AI4Good Lab Fellow × Mila ELab (2025)</li>
    <li><strong>Indigenomics Institute &amp; Global Centre for Indigenomics</strong> — Data Specialist &amp; Executive Support (2024–2025)</li>
    <li><strong>Center for AI and Digital Policy (CAIDP)</strong> — Distinguished Research Member (2025)</li>
    <li><strong>McGill University</strong> — B.A. Economics, Islamic Studies Minor - Urdu (2023)</li>
  </ul>
</section>
