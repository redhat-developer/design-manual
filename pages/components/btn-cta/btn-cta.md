---
layout: develop
category: develop
title: Button CTAs
active_nav: Components
permalink: /components/btn-cta
section: components
status: released
custom_js: code-snippets
intro_paragraph: >
  Sample variations of the Button CTAs.
---

{% include code-snippets.html %}

<h2 class="rhddx-m-dark">Default Buttons</h2>
{% include_relative default.md %}

<h2 class="rhddx-m-dark">Buttons on a dark background</h2>
{% include_relative dark-background.md %}

<h2 class="rhddx-m-dark">Legacy button styles</h2>
{% include_relative legacy.md %}

<h2 class="rhddx-m-dark">Button states</h2>
{% include_relative states.md %}

<h2 id="code rhddx-m-dark">Code Snippets</h2>

<h3 class="rhddx-m-dark">Button Examples</h3>
<div
  class="codepen"
  data-prefill='{
    "tags": ["html", "css", "Red Hat Developer Program", "Red Hat Developer Design Manual"],
    "stylesheets": "https://developers.redhat.com/themes/custom/rhdp2/rhd-frontend/dist/css/rhd.css",
    "scripts": "https://kit.fontawesome.com/79419145d2.js",
    "title": "Button examples"
  }'
  data-height="400"
  data-theme-id="1"
  data-default-tab="html"
  data-editable="true"
>
  <pre data-lang="html">
    {% include_relative button.html %}
  </pre>
</div>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
