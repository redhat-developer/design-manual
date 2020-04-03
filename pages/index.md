---
layout: home
title: Design Manual
heading: Build here. Go anywhere.
subheader: developers.redhat.com
subheader_url: https://developers.redhat.com
intro: >
  This guide will serve as a home base for the Red Hat Developer story, messaging, and visual brand language. It’s a place you can always return to when you have questions about how to best represent Red Hat Developer through messaging or visual elements.
permalink: /
section: home
custom_js: [cards, home]
custom_css: [cards, home]
---
<section class="pf-c-page__main-section rhddx-m-homepage">
  <div>
    <div class="pf-l-flex pf-u-mb-lg pf-u-text-align-center" style="margin: 0 auto;">
      <div class="pf-l-flex__item">
        <h1 class="pf-c-title pf-m-4xl">{{ page.heading }}</h1>
        <a href="{{ page.subheader_url }}" target="top" class="pf-c-title pf-m-3xl rhddx-m-link-header">{{ page.subheader }}<span class="rhddx-m-link-header__arrow-right pf-u-ml-sm"><i class="fas fa-arrow-right" aria-hidden="true"></i></span></a>
        <p class="pf-u-my-xl pf-m-lg">{{ page.intro }}</p>
      </div>
    </div>
    <div class="pf-l-flex pf-m-justify-content-space-evenly rhddx-l-card__intro">
      <div class="pf-l-flex__item pf-m-3-col-on-md pf-u-py-xl pf-u-py-0-on-lg pf-u-pr-0 pf-u-pr-xl-on-md">
        <div class="pf-c-card rhddx-c-card rhddx-m-developer">
          <div class="pf-c-card__header">
            <i class="fad fa-laptop-code fa-3x"></i>
          </div>
          <div class="pf-c-card__body">I'm a<br>developer.</div>
        </div>
      </div>
      <div class="pf-l-flex__item pf-m-3-col-on-md pf-u-py-xl pf-u-py-0-on-lg pf-u-pr-0 pf-u-pr-xl-on-md">
        <div class="pf-c-card rhddx-c-card rhddx-m-designer">
          <div class="pf-c-card__header">
            <i class="fad fa-swatchbook fa-3x"></i>
          </div>
          <div class="pf-c-card__body">I'm a<br>designer.</div>
        </div>
      </div>
      <div class="pf-l-flex__item pf-m-3-col-on-md pf-u-py-xl pf-u-py-0-on-lg pf-u-pr-0">
        <div class="pf-c-card rhddx-c-card rhddx-m-creator">
          <div class="pf-c-card__header">
            <i class="fad fa-pencil-alt fa-3x"></i>
          </div>
          <div class="pf-c-card__body">I'm a<br>content creator.</div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-u-my-2xl">
    <div class="pf-l-flex">
      <div class="pf-l-flex__item pf-m-grow">
        <!-- I'm a developer -->
        {% include quick-links/developer.html %}
        <!-- I'm a designer -->
        {% include quick-links/designer.html %}
        <!-- I'm a content creator -->
        {% include quick-links/creator.html %}
      </div>
    </div>
  </div>
</section>
