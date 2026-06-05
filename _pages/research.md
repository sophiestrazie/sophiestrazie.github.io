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

### Core Question

*What explains how innovative research ideas are generated and disseminated within economics, and how does this process depend on researcher human capital and institutional incentives across different stages of an economists' career?*

### Question 1 — What explains variation in computational adoption and diffusion across disciplines?

I'm constructing a bibliometric dataset tracking first-use dates of specific
techniques (machine learning classifiers, natural language processing, neural
networks) across disciplinary journals. 

### Question 2 — What mechanisms explain variation in adoption at the individual level?

Using primary survey data from academic, government, and private-sector
researchers, I examine cognitive, institutional, and pedagogical barriers to
skill acquisition. 

This component focuses on:

- disciplinary training pathways  
- epistemic norms and evaluation standards  
- perceived legitimacy of computational approaches  
- access to computational human capital  
- career-stage differences in adoption incentives  

Pilot collaborations with organizations such as the US Federal Reserve,
Georgetown University’s CSET, and the Conference Board of Canada inform survey
design and extend empirical coverage beyond academia.

### Question 3 — Can targeted interventions accelerate adoption?

A set of field and quasi-experimental designs evaluates whether specific
pedagogical and institutional interventions can shift adoption trajectories, including mechanisms that shape perceived reputational risk in adoption. 

### Question 4 — How do disciplines define and enforce methodological legitimacy?

Beyond adoption rates, the project examines how disciplinary communities
construct boundaries around what counts as valid inference, acceptable tools,
and credible research.

## Supervisor &amp; Setting

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
