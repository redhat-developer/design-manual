---
layout: develop
category: develop
title: CTA
active_nav: Components
permalink: /components/cta
section: components
status: released
intro_paragraph: >

---

{% include code-snippets.html %}

{% include_relative cta-default.md %}

{% include_relative cta-dark.md %}

{% include_relative cta-left.md %}

<h2 id="code">Code Snippets</h2>

### Basic CTA Example
<div
  class="codepen"
  data-prefill='{
    "tags": ["html", "css", "Red Hat Developer Program", "Red Hat Developer Design Manual"],
    "stylesheets": "https://developers.redhat.com/themes/custom/rhdp2/rhd-frontend/dist/css/rhd.css",
    "scripts": "https://kit.fontawesome.com/79419145d2.js"
  }'
  data-height="400"
  data-theme-id="1"
  data-default-tab="html,result"
  data-editable="true"
>
  <pre data-lang="html">
    {% include_relative cta-basic.html %}
  </pre>
</div>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
