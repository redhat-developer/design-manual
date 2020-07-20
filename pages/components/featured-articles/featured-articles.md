---
layout: develop
category: develop
title: Featured Articles
active_nav: Components
permalink: /components/featured-articles
section: components
status: released
intro_paragraph: >

---

{% include_relative default.md %}
<div
  class="codepen"
  data-prefill='{
    "tags": ["html", "css", "Red Hat Developer Program", "Red Hat Developer Design Manual"],
    "stylesheets": "https://developers.redhat.com/themes/custom/rhdp2/rhd-frontend/dist/css/rhd.css",
    "scripts": "https://kit.fontawesome.com/79419145d2.js",
    "title": "Featured Article example"
  }'
  data-height="400"
  data-theme-id="1"
  data-default-tab="html"
  data-editable="true"
>
  <pre data-lang="html">
    {% include_relative featured-articles-example.html %}
  </pre>
  <pre data-lang="css" data-options="scss">
    body {
      padding: 25px;
    }
  </pre>
</div>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

{% include_relative centered.md %}
{% include_relative dark.md %}
{% include_relative gray.md %}
{% include_relative no-padding-bottom.md %}
{% include_relative no-padding-top.md %}
