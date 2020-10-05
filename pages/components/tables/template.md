---
layout: develop
category: develop
title: Tables
active_nav: Components
permalink: /components/tables
section: components
status: unreleased
custom_css: tables
custom_js: code-snippets
intro_paragraph:
---
<!-- remove this style block once code is merged to developers.redhat.com -->

{% include code-snippets.html %}

## Default table
_expandable rows_

Add `pf-m-expandable` to `pf-c-table` for any tables that have expandable rows.
{% include_relative default.md %}

## Compact table
_compact table with expandable rows_

Add `pf-m-compact` to `pf-c-table` for any tables that you wish to use the compact modifier. The `pf-m-compact` modifier can be used with the `pf-m-expandable` modifier.
{% include_relative compact-table.md %}

## Advanced table
_default table with expandable rows and a toolbar_

{% include_relative advanced-table.md %}

## Basic table (no expansion)
_default table with no expansion_

{% include_relative basic-table.md %}

## Table enhancements
For additional capabilities, tables can also use the Toolbar component.

---
---

<h2 id="code">Code Snippets</h2>
<a href="#table-example">Table Example</a> |
<a href="#compact-table-example">Compact Table Example</a> |
<a href="#advanced-table-example">Advanced Table Example</a> |
<a href="#basic-table-example">Basic Table Example</a>

<h3 id="table-example">Table Example</h3>
<div
  class="codepen"
  data-prefill='{
    "tags": ["html", "css", "Red Hat Developer Program", "Red Hat Developer Design Manual"],
    "stylesheets": "https://developers.redhat.com/themes/custom/rhdp2/rhd-frontend/dist/css/rhd.css",
    "scripts": "https://kit.fontawesome.com/79419145d2.js"
  }'
  data-height="400"
  data-theme-id="1"
  data-default-tab="html"
  data-editable="true"
>
  <pre data-lang="html">
    {% include_relative table.html %}
  </pre>
</div>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<h3 id="compact-table-example">Compact Table Example</h3>
{% highlight html %}
{% include_relative compact-table.html %}
{% endhighlight %}

<h3 id="advanced-table-example">Advanced Table Example</h3>
{% highlight html %}
{% include_relative advanced-table.html %}
{% endhighlight %}

<h3 id="basic-table-example">Basic Table Example</h3>
{% highlight html %}
{% include_relative basic-table.html %}
{% endhighlight %}
