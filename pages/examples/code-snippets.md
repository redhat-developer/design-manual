---
layout: pages
title: Code Snippets
permalink: /examples/code-snippets
section: pages
intro_paragraph: >
  Various code snippet examples for the Design Manual site.
---

Supported languages:
 Markup / HTML / SVG / CSS / JavaScript / Git / AsciiDoc / Bash + Shell / JSON / SCSS / Liquid / Markdown / TOML / Twig / YAML

{% highlight html %}
<a href="#" class="pf-m-link">demo link</a>
{% endhighlight %}

{% highlight css %}
.rhddx-frontend {
  font-family: Roboto;
}
{% endhighlight %}

{% highlight scss %}
div.code-toolbar > .toolbar .toolbar-item {
  button.pf-c-button.pf-m-control {
    padding: 8px 20px;
    background-color: #fff;
    border: 2px solid;
    border-color: #f0f0f0;
    border-bottom-color: #212121;
    margin-top: 2px;
    &::before {
      content: "\f0c5";
      font-family: "Font Awesome 5 Free";
      font-weight: 700;
      color: #151515;
    }
    &:focus,
    &:active {
      border-bottom-color: #0159C2;
    }
  }
}
{% endhighlight %}

{% highlight js %}
var _self
{% endhighlight %}

{% highlight yml %}
NODE_VERSION: 10.16.0
NPM_VERSION: 6.13.2
RUBY_VERSION: 2.6.3
{% endhighlight %}
{% highlight json %}
{
  "name": "design-manual",
  "version": "1.0.0",
  "description": "Documentation and source files for RHD brand standards & design systems.",
  "main": "index.js",
  "engines": {
    "node": ">=10.10.0"
  }
}
{% endhighlight %}
{% highlight toml %}
[build]
  base = "/"
  publish = "_site"
  command = "npm run deployment"
{% endhighlight %}
{% highlight bash %}
$ echo "Submodule is empty/missing"
{% endhighlight %}

__Embedded GitHub Gist__
<script src="https://gist.github.com/mindreeper2420/a3a38d33f17e2b1d197dc241bcd7db79.js"></script>

__Embedded CodePen__
<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="mindreeper2420" data-slug-hash="qBBjOPG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Card example">
  <span>See the Pen <a href="https://codepen.io/mindreeper2420/pen/qBBjOPG">
  Card example</a> by Adam Jolicoeur (<a href="https://codepen.io/mindreeper2420">@mindreeper2420</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
