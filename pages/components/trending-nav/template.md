---
layout: develop
category: develop
title: Trending Nav
active_nav: Components
permalink: /components/trending-nav
section: components
status: unreleased
custom_css: trending-nav
custom_js: trending-nav
intro_paragraph:
---

{% include code-snippets.html %}

<h2 id="code">Code Snippets</h2>

The Trending Navigation is designed to dynamically show the trending items on the Developer site. At a maximum of six (6) items, the Trending navigation is configured to show all of the items at a desktop (1440px wide) size, while using a horizontal scroll on smaller screens. The Trending Navigation is always placed below the main navigation.

## Default Trending Nav
{% include_relative default.md %}

### Trending Nav Examples

#### Default

The default version of the Trending Navigation, designed to show whether an item is trending up or down (by the use of color-coded arrows), the type of content, and the title. Additional information (such as the author or a publication date), are available on hover.

<p
  class="codepen"
  data-height="265"
  data-theme-id="dark"
  data-default-tab="result"
  data-user="mindreeper2420"
  data-slug-hash="GRqjdjo"
  style="height: 265px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid;
          margin: 1em 0;
          padding: 1em;"
  data-pen-title="New Trending Nav w/popover">
  <span>See the Pen <a href="https://codepen.io/mindreeper2420/pen/GRqjdjo">
  New Trending Nav w/popover</a> by Adam Jolicoeur (<a href="https://codepen.io/mindreeper2420">@mindreeper2420</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

#### Using a tooltip

While the default version of the Trending Navigation uses a hybrid tooltip/popover, this version uses a simple tooltip to display the full title of the trending item.

<p
  class="codepen"
  data-height="265"
  data-theme-id="dark"
  data-default-tab="result"
  data-user="mindreeper2420"
  data-slug-hash="YzWpOzg"
  style="height: 265px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid;
          margin: 1em 0;
          padding: 1em;"
  data-pen-title="New Trending Nav w/tooltip">
  <span>See the Pen <a href="https://codepen.io/mindreeper2420/pen/YzWpOzg">
  New Trending Nav w/tooltip</a> by Adam Jolicoeur (<a href="https://codepen.io/mindreeper2420">@mindreeper2420</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

#### Simplified

A simplified version of the Trending Navigation removes the 'type' of content and only shows the page title. An even simpler method removes the identifying arrows (up and down), replacing them with colored text (green for trending up, red for trending down). This version also uses the basic tooltip functionality.

<p
  class="codepen"
  data-height="290"
  data-theme-id="dark"
  data-default-tab="result"
  data-user="mindreeper2420"
  data-slug-hash="QWNXPRZ"
  style="height: 290px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid;
          margin: 1em 0;
          padding: 1em;"
  data-pen-title="New Trending Nav (simplified)">
  <span>See the Pen <a href="https://codepen.io/mindreeper2420/pen/QWNXPRZ">
  New Trending Nav (simplified)</a> by Adam Jolicoeur (<a href="https://codepen.io/mindreeper2420">@mindreeper2420</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

#### Advanced

The advanced version of the Trending navigation takes the standard horizontal layout but, instead of allowing for a horizontal scroll, uses an expandable area to display more than six (6) items. When expanded, the Trending navigation becomes a standard vertical list that can be scrolled vertically.

<p
  class="codepen"
  data-height="265"
  data-theme-id="dark"
  data-default-tab="result"
  data-user="mindreeper2420"
  data-slug-hash="mdPZYrX"
  style="height: 265px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid;
          margin: 1em 0;
          padding: 1em;"
  data-pen-title="New Trending Nav (advanced)">
  <span>See the Pen <a href="https://codepen.io/mindreeper2420/pen/mdPZYrX">
  New Trending Nav (simplified)</a> by Adam Jolicoeur (<a href="https://codepen.io/mindreeper2420">@mindreeper2420</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>