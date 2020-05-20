---
layout: develop
category: develop
section: Develop
title: Homepage
active_nav: Layouts
permalink: /layouts/home
intro_paragraph: >

---

<style>
  .rhddx-homepage-example .pf-l-grid > * {
    border: 1px dashed #000;
    font-weight: 700;
    padding: 1em;
  }
</style>

<div class="rhddx-homepage-example">
  <div class="pf-l-grid">
    <div class="pf-l-grid__item pf-m-12-col pf-m-6-col-on-md">
      <div class="pf-l-grid">
        <div class="pf-l-grid__item pf-m-12-col pf-u-mx-auto pf-u-my-0">
          <img src="https://via.placeholder.com/350x200.png?text=Red+Hat" alt="Red Hat">
        </div>
        <div class="pf-l-grid__item pf-m-12-col pf-u-text-align-center">
          Learn about the Developer program
        </div>
      </div>
    </div>
    <div class="pf-l-grid__item pf-m-12-col pf-m-6-col-on-md">
      <div class="pf-l-grid">
        <div class="pf-l-grid__item pf-m-12-col pf-u-mx-auto pf-u-my-0">
          <img src="https://via.placeholder.com/350x200.png?text=IBM" alt="IBM">
        </div>
        <div class="pf-l-grid__item pf-m-12-col pf-u-text-align-center">
          Learn about the Red Hat and Communities
        </div>
      </div>
    </div>
    <div class="pf-l-grid__item pf-m-12-col pf-m-3-col-on-md pf-m-3-row-on-md">
      <h2>Latest articles on topic</h2>
      article text
    </div>
    <div class="pf-l-grid__item pf-m-12-col pf-m-9-col-on-md">
      <div class="pf-l-grid">
        <div class="pf-l-grid__item">
          <img src="https://via.placeholder.com/350x200?text=Hello+world" alt="Hello World">
        </div>
        <div class="pf-l-grid__item">
          Body content
        </div>
        <div class="pf-l-grid__item">
          Cards
        </div>
      </div>
    </div>
    <div class="pf-l-grid__item pf-m-12-col">
      <h2>Build here, go anywhere</h2>
    </div>
    <div class="pf-l-grid__item pf-m-12-col pf-m-6-col-on-md">
      <div class="pf-l-grid">
        <div class="pf-l-grid__item pf-m-12-col">
          Full width card
        </div>
        <div class="pf-l-grid__item pf-m-6-col">
          Half width card
        </div>
        <div class="pf-l-grid__item pf-m-6-col">
          Half width card
        </div>
      </div>
    </div>
    <div class="pf-l-grid__item pf-m-12-col pf-m-6-col-on-md">
      <div class="pf-l-grid">
        <div class="pf-l-grid__item pf-m-12-col pf-m-6-col-on-md pf-m-2-row-on-md">
          Card that extends over two rows on medium, 1 row on small
        </div>
        <div class="pf-l-grid__item pf-m-12-col pf-m-6-col-on-md">
          Single row card
        </div>
        <div class="pf-l-grid__item pf-m-12-col pf-m-6-col-on-md">
          Single row card
        </div>
      </div>
    </div>
    <div class="pf-l-grid__item pf-m-12-col">
      <h2>Featured resources</h2>
    </div>
    <div class="pf-l-grid__item pf-m-12-col pf-m-3-col-on-md pf-m-2-row-on-md">
      <div class="pf-l-grid">
        <div class="pf-l-grid__item pf-m-12-col">
          <h3>2 min videos to get started</h3>
        </div>
      </div>
      <div class="pf-l-grid">
        <div class="pf-l-grid__item">
          Vertical card list
        </div>
      </div>
    </div>
    <div class="pf-l-grid__item pf-m-12-col pf-m-9-col-on-md">
      <div class="pf-l-grid">
        <div class="pf-l-grid__item pf-m-12-col">
          <h3>eBooks and cheat sheets</h3>
        </div>
      </div>
      <div class="pf-l-grid">
        <div class="pf-l-grid__item pf-m-12-col pf-m-4-col-on-md">
          Card
        </div>
        <div class="pf-l-grid__item pf-m-12-col pf-m-4-col-on-md">
          Card
        </div>
        <div class="pf-l-grid__item pf-m-12-col pf-m-4-col-on-md">
          Vertical card list
        </div>
      </div>
    </div>
  </div>
</div>
{% highlight html %}
  {% include_relative grid-example.html %}
{% endhighlight %}
