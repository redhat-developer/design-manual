---
layout: components
title: Toolbar
permalink: /components/toolbar
section: components
category: components
status: unreleased
custom_js: code-snippets
intro_paragraph:
---
<style>
  .rhd-c-toolbar .pf-c-select__toggle:hover::before,
  .rhd-c-toolbar .pf-c-select__toggle.pf-m-hover::before,
  .rhd-c-toolbar .pf-c-select__toggle:active::before,
  .rhd-c-toolbar .pf-c-select__toggle.pf-m-active::before,
  .rhd-c-toolbar .pf-c-select__toggle:focus-within::before {
    --pf-c-select__toggle--BorderBottomColor: #ee0000;
  }
</style>
{% include code-snippets.html %}

## Default Toolbar
{% include_relative default.md %}

<h2 id="code">Code Snippets</h2>

### Toolbar Example
{% highlight html %}
{% include_relative toolbar.html %}
{% endhighlight %}
