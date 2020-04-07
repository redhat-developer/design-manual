---
layout: components
title: Tables
permalink: /components/tables
section: components
category: components
status: unreleased
custom_js: code-snippets
intro_paragraph:
---
<!-- remove this style block once code is merged to developers.redhat.com -->
<style>
  .pf-c-table .pf-c-button {
    padding-left: 0;
  }
  .rhd-c-table {
    --pf-c-table__expandable-row--before--BackgroundColor: #ee0000;
  }
  .rhd-m-nested-table thead tr {
    border-bottom: 0 !important;
  }
  .rhd-m-nested-table thead tr th {
    padding-bottom: 8px;
  }
  .rhd-m-nested-table tbody tr th {
    padding-top: 8px;
  }
  .rhd-m-nested-table tbody tr td {
    padding-top: 8px;
  }
  .rhd-m-nested-table thead tr>*:first-child {
    padding-left: 0;
  }
  .rhd-m-nested-table tbody tr>*:first-child {
    padding-left: 0;
  }
  .pf-c-table .pf-c-table__expandable-row-content h6 {
    font-size: 14px;
    font-weight: 600;
  }
  .pf-c-table .pf-c-table__expandable-row-content p {
    font-size: 14px;
  }
</style>
{% include code-snippets.html %}

## Default table
_expandable and selectable rows_

> Add `pf-m-expandable` to `pf-c-table` for any tables that have expandable rows.
{% include_relative default.md %}

## Compact table
_compact table with expandable and selectable rows_

> Add `pf-m-compact` to `pf-c-table` for any tables that you wish to use the compact modifier. The `pf-m-compact` modifier can be used with the `pf-m-expandable` modifier.
{% include_relative compact-table.md %}

## Table enhancements
For additional capabilities, tables can also use the Toolbar component.

---
---

<h2 id="code">Code Snippets</h2>

### Table Example
{% highlight html %}
{% include_relative table.html %}
{% endhighlight %}

### Compact Table Example
{% highlight html %}
{% include_relative compact-table.html %}
{% endhighlight %}
