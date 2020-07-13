---
layout: develop
category: develop
section: Develop
title: Responsive Grid
active_nav: Layouts
permalink: /layouts/grid
intro_paragraph: >

---

## Base grid

<div
  class="codepen"
  data-prefill='{
    "tags": ["html", "css", "Red Hat Developer Program", "Red Hat Developer Design Manual"],
    "stylesheets": "https://developers.redhat.com/themes/custom/rhdp2/rhd-frontend/dist/css/rhd.css",
    "scripts": "https://kit.fontawesome.com/79419145d2.js"
  }'
  data-height="750px"
  data-theme-id="1"
  data-default-tab="html,result"
  data-editable="true"
>
  <pre data-lang="html">
    {% include_relative grid-base.html %}
  </pre>
  <pre data-lang="css">
    .pf-l-grid > * {
      border: 1px dashed #000;
      font-weight: 700;
      padding: 1em;
    }
  </pre>
</div>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Base grid with gutters
<div
  class="codepen"
  data-prefill='{
    "tags": ["html", "css", "Red Hat Developer Program", "Red Hat Developer Design Manual"],
    "stylesheets": "https://developers.redhat.com/themes/custom/rhdp2/rhd-frontend/dist/css/rhd.css",
    "scripts": "https://kit.fontawesome.com/79419145d2.js"
  }'
  data-height="750px"
  data-theme-id="1"
  data-default-tab="html,result"
  data-editable="true"
>
  <pre data-lang="html">
    {% include_relative grid-base-gutters.html %}
  </pre>
  <pre data-lang="css">
    .pf-l-grid > * {
      border: 1px dashed #000;
      font-weight: 700;
      padding: 1em;
    }
  </pre>
</div>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Smart grid
<div
  class="codepen"
  data-prefill='{
    "tags": ["html", "css", "Red Hat Developer Program", "Red Hat Developer Design Manual"],
    "stylesheets": "https://developers.redhat.com/themes/custom/rhdp2/rhd-frontend/dist/css/rhd.css",
    "scripts": "https://kit.fontawesome.com/79419145d2.js"
  }'
  data-height="750px"
  data-theme-id="1"
  data-default-tab="html,result"
  data-editable="true"
>
  <pre data-lang="html">
    {% include_relative grid-smart.html %}
  </pre>
  <pre data-lang="css">
    .pf-l-grid > * {
      border: 1px dashed #000;
      font-weight: 700;
      padding: 1em;
    }
  </pre>
</div>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Row span

<div
  class="codepen"
  data-prefill='{
    "tags": ["html", "css", "Red Hat Developer Program", "Red Hat Developer Design Manual"],
    "stylesheets": "https://developers.redhat.com/themes/custom/rhdp2/rhd-frontend/dist/css/rhd.css",
    "scripts": "https://kit.fontawesome.com/79419145d2.js"
  }'
  data-height="750px"
  data-theme-id="1"
  data-default-tab="html,result"
  data-editable="true"
>
  <pre data-lang="html">
    {% include_relative grid-row-span.html %}
  </pre>
  <pre data-lang="css">
    .pf-l-grid > * {
      border: 1px dashed #000;
      font-weight: 700;
      padding: 1em;
    }
  </pre>
</div>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
