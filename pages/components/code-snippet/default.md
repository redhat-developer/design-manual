<h2 class="rhddx-m-dark">Default</h2>

<block>
Supported languages:
 Markup / HTML / SVG / CSS / JavaScript / Git / AsciiDoc / Bash + Shell / JSON / SCSS / Liquid / Markdown / TOML / Twig / YAML
</block>

<h2 class="rhddx-m-dark">Inline Code</h2>

<p>This is an `$ inline code example`, styled to match the large code block snippets.</p>

<h2 class="rhddx-m-dark">Code Blocks</h2>

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

__Embedded CodePen__
<div
  class="codepen"
  data-prefill='{
    "tags": ["html", "css", "Red Hat Developer Program", "Red Hat Developer Design Manual"],
    "stylesheets": "https://developers.redhat.com/themes/custom/rhdp2/rhd-frontend/dist/css/rhd.css",
    "scripts": "https://kit.fontawesome.com/79419145d2.js",
    "title": "Embedded CodePen example"
  }'
  data-height="400"
  data-theme-id="1"
  data-default-tab="css"
  data-editable="true"
>
  <pre data-lang="scss">
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
  </pre>
</div>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

