---
layout: search
title: Site search
permalink: /search
section: search
category: search
intro_paragraph:
---

<div class="pf-l-grid pf-m-12-col pf-u-p-md">
  <div class="pf-l-grid__item">
    <h1>{{ page.title }}</h1>
  </div>
  <div class="pf-l-grid__item pf-m-6-col">
    <input class="pf-c-form-control rhddx-c-site-search" type="search" id="search-field" name="query" placeholder="Search" aria-label="Search" autofocus="true" />
  </div>
</div>
<div class="well" id="searchbox">
  <ul class="pf-c-data-list rhddx-c-site-search__results" role="list" aria-label="Search results" id="results" style="border-top: 0;">
  </ul>
</div>
