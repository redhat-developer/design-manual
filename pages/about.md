---
layout: about
title: About
long_title: About this site
permalink: /about
section: overview
category: about
editable: true
intro_paragraph: >

---

<div class="pf-l-grid pf-m-12-col pf-u-p-md">
  <div class="pf-l-grid__item" id="main">
    <h3><i class="fal fa-info-circle"></i> {{ page.long_title }}</h3>
  </div>
</div>
<div class="pf-l-grid pf-m-gutter pf-m-12-col pf-u-p-md">
  <div class="pf-l-grid__item pf-m-3-col-on-md">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title">
          The RHDDX site
        </h3>
        <p class="rhd-c-card__body">
          The RHDDX site is the reference environment for developers.redhat.com. We strive to keep this site as up-to-date as possible but occasionally differences arrise between here and developers.redhat.com. If you find an error/difference/concern, feel free to report and issue on our <a href="https://github.com/redhat-developer/developers.redhat.com/issues">GitHub</a> page.
        </p>
      </div>
    </div>
  </div>
  <div class="pf-l-grid__item pf-m-3-col-on-md">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title">
          Development
        </h3>
        <p class="rhd-c-card__body">
          If you wish to contribute to the RHD Frontend project, read their <a href="https://github.com/redhat-developer/developers.redhat.com/blob/master/_docker/drupal/drupal-filesystem/web/themes/custom/rhdp2/rhd-frontend/README.md" target="top">Getting Started guide</a>.
        </p>
        <p class="rhd-c-card__body">
          {% if jekyll.environment == 'development' %}
            To contribute to this documentation site, see <a href="/getting-started/update-this-documentation">Updating this documentation</a>.
          {% elsif jekyll.environment == 'production' %}
            To contribute to this documentation site, see <a href="{{ site.baseurl }}/getting-started/update-this-documentation">Updating this documentation</a>.
          {% endif %}
        </p>
      </div>
    </div>
  </div>
</div>
