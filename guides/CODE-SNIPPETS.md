# Code Snippets

Code snippets are rendered using PrismJS and Jekyll syntax identifiers.

## Example:
```markdown
{% highlight html %}
{% include_relative grid-example.html %}
{% endhighlight %}
```

## Callouts:

With `{% highlight %}` defining the language (in the example above, it is `html`, PrismJS will) apply the proper syntax highlighting to match the set language. In addition, that language will be inserted into the label that appears in the upper right corner of the code snippet block.

## Features

### Supported languages
Currently, we support the following languages with syntax highlighting:

- CSS
- CSS-extras
- SCSS
- Javascript
- JSON
- Liquid
- Markdown
- TOML
- YAML
- Markup
- Git

### Expand/Collapse
Don't want to scroll a lot? You can set the `<figure>` block to expand/collapse. Add the following code to your page, above the `{% highlight %}` block.

```html
<div class="pf-u-mt-md">
  <button class="rhddx-c-button rhddx-m-code-toggler" id="codeToggler">Toggle code snippets</button>
</div>
```
