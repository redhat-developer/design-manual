---
layout: develop
category: develop
title: Topic Nav
active_nav: Components
permalink: /components/topic-nav
section: components
status: unreleased
custom_css: topic-nav
custom_js: topic-nav
intro_paragraph:
---

{% include code-snippets.html %}

<h2 id="code">Code Snippets</h2>

The Topic Navigation is designed to dynamically show the trending topics on the Developer site. At a maximum of six (6) items, the topic navigation is configured to show all of the items at a desktop (1440px wide) size, while using a horizontal scroll on smaller screens. The Topic Navigation is always placed below the main navigation.

## Default Topic Nav
{% include_relative default.md %}

### Topic Nav Examples

#### Default

The default version of the Topic Navigation, designed to show whether an item is trending up or down (by the use of color-coded arrows), the type of content, and the title. Additional information (such as published date), are available on hover.

<p
  class="codepen"
  data-height="165"
  data-theme-id="dark"
  data-default-tab="result"
  data-user="mindreeper2420"
  data-slug-hash="yLOrvro"
  style="height: 165px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid;
          margin: 1em 0;
          padding: 1em;"
  data-pen-title="New Topic Nav">
  <span>See the Pen <a href="https://codepen.io/mindreeper2420/pen/yLOrvro">
  New Topic Nav</a> by Adam Jolicoeur (<a href="https://codepen.io/mindreeper2420">@mindreeper2420</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

#### Simplified

A simplified version of the Topic Navigation removes the 'type' of content and only shows the page title. An even simpler method removes the identifying arrows (up and down), replacing them with colored text (green for trending up, red for trending down).

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
  data-pen-title="New Topic Nav (simplified)">
  <span>See the Pen <a href="https://codepen.io/mindreeper2420/pen/QWNXPRZ">
  New Topic Nav (simplified)</a> by Adam Jolicoeur (<a href="https://codepen.io/mindreeper2420">@mindreeper2420</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

#### Advanced

The advanced version of the Topic Navigation takes the standard horizontal layout but, instead of allowing for a horizontal scroll, uses an expandable area to display more than six (6) items. When expanded, the topic navigation becomes a standard vertical list that can be scrolled vertically.

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
  data-pen-title="New Topic Nav (advanced)">
  <span>See the Pen <a href="https://codepen.io/mindreeper2420/pen/mdPZYrX">
  New Topic Nav (simplified)</a> by Adam Jolicoeur (<a href="https://codepen.io/mindreeper2420">@mindreeper2420</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>