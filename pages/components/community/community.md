---
layout: develop
category: develop
title: Community
active_nav: Components
permalink: /components/community
section: components
status: released
intro_paragraph: >

---
<!-- scripts: ["@rhd/rhdp-projects/rhdp-project-wc"] -->

<div data-product-id="fuse">
    <rhdp-projects dcp-url="https://dcp2.jboss.org/v2/rest/search/suggest_project_name_ngram_more_fields?sort=sys_title&amp;query=" upstream-product-id="fuse">
        <rhdp-project-query></rhdp-project-query>
        <rhdp-project-url></rhdp-project-url>
    </rhdp-projects>
</div>

```html
<div data-product-id="fuse">
<rhdp-projects dcp-url="https://dcp2.jboss.org/v2/rest/search/suggest_project_name_ngram_more_fields?sort=sys_title&amp;query=" upstream-product-id="fuse">
    <rhdp-project-query></rhdp-project-query>
    <rhdp-project-url></rhdp-project-url>
</rhdp-projects>
</div>
```
