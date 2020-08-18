---
layout: pages
category: create
section: Content Types
permalink: /create/articles
title: Articles
active_nav: Content_types
status: development
intro_paragraph: >

custom_js: panel
custom_css: tabs
---

{% if jekyll.environment == 'development' %}
  <a href="/create/articles-full">
    <span class="fa-stack fa-7x">
      <i class="fad fa-file-image fa-stack-1x"></i>
      <i class="far fa-expand fa-stack-2x" style="color:black"></i>
    </span>
    View full page example
  </a>
{% elsif jekyll.environment == 'production' %}
  <a href="{{site.baseurl}}/create/articles-full">
    <span class="fa-stack fa-7x">
      <i class="fad fa-file-image fa-stack-1x"></i>
      <i class="far fa-expand fa-stack-2x" style="color:black"></i>
    </span>
    View full page example
  </a>
{% endif %}
