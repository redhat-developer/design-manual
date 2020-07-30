---
layout: getting-started
title: Page Construction
permalink: /help/page-construction
section: getting_started
intro_paragraph: >
---

All pages require **layout**, **title**, **permalink**, and **section** definitions. The **category**, **status**, and **intro_paragraph** definitions are optional.

```markdown
# Getting Started Overview page example
---
layout: getting-started
title: Getting Started Overview
permalink: /getting-started
section: getting_started
intro_paragraph: >
  Like the RHDDX library, our Getting Started guide is based off of the <a href="https://www.patternfly.org/v4/get-started/about" target="top">PatternFly</a> Getting Started guide.
---
```
```markdown
# Component page example
---
layout: components
title: Alerts
permalink: /components/alerts
section: components
category: components
active_nav: Develop
status: released / unreleased
intro_paragraph: >

---
```
  - **layout**
    - inform the build system which layout you would like to use.
  - **title**
    - give your page a title. This should provide the user with a clear idea of what they will be looking at. The title will appear in the side navigation as a link.
  - **permalink**
    - the permalink is the _permanent link_ to the page. The link should follow the pattern of /_folder location_/_filename_. If the page you are linking to resides only under `./pages/`, then you only need to provide the _filename_. This will make it asier to find in the future and keep things organized in the CMS.
  - **section**
    - what the page is - in the example above, the page is part of the _components_ examples for the site.
  - **category**
    - similar to **section**, category is used for filtering content, as well as automatically adding pages to navigations. If labelled incorrectly, your page may not appear where you expect it to.
    - to find a list of available categories, click [here](help/available-categories.md).
  - **active_nav**
    - the
  - **status**
    - this will add a label to the top of the page, under the page title and introduction paragraph (if provided). If set as `status: unreleased`, an **unreleased** label will appear, signifying that it is not yet available for use on developers.redat.com. If set as `status: released`, it will not show any label. Components without a status label are considered to be released and available for use on the developer site.
    - all `status` identifiers will be displayed when using the Search, so that a user can search by **released** or **unreleased** items.
  - **intro_paragraph**
    - add an introduction to the component at the top of the page, underneath the Title.

When adding the **intro_paragraph** definition, an introductory paragraph will be added to the top of the page. This is useful when you want to give the user any information up front that may help them understand what they are looking at without reading the entire page.
