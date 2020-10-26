---
layout: design
category: design
section: RHD Brand Elements
permalink: /design/brand/typography
title: Typography
active_nav: RHD_Brand_Elements
intro_paragraph: >
  Fonts used by the Red Hat Developer Design Team.
custom_js:
custom_css:
---

<style>
  section {
    margin: 0 32px;
  }
  /* table {
    width: 100%;
    background-color: #fff;
  }
  table thead tr th {
    text-align: left;
  }
  tr {
    border-bottom: 1px solid #d7d7d7;
  }
  table tbody tr {
    background-color: #fff;
  }
  table thead tr th,
  table tbody tr td {
    padding: 16px 0 16px 16px;
  } */
</style>

<h1 class="pf-c-title">Our font family</h1>
We use the open source Red Hat Text and Red Hat Display fonts.

<table class="pf-c-table pf-m-grid-md" role="grid" aria-label="Red Hat Developer Font Family table" id="table-font-family">
  <caption>The relationship between fonts give a brand its identity and its messages a voice. When used effectively, typography plays a critical role in establishing the tone of Red Hat Developer's brand expression. Our typography should follow the Red Hat parent brand guidelines.</caption>
  <thead>
    <tr role="row">
      <th role="columnheader" scope="col">Typeface</th>
      <th role="columnheader" scope="col">Description</th>
      <th role="columnheader" scope="col">Example</th>
      <th role="columnheader" scope="col">Uses</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <td role="cell" data-label="Typeface" style="vertical-align: top; word-break: normal;">Interstate</td>
      <td role="cell" data-label="Description" style="vertical-align: top;">Interstate is our corporate typeface. It’s part of a large and versatile type family, which allows us to speak in many voices—from big and bold to calm and confident. <br> Interstate looks best in print and when used for big headlines. We use it for all printed material, like collateral and stationery; for advertising, like printed ads and web banners; and anywhere text is embedded in an image, like diagrams and videos.</td>
      <td role="cell" data-label="Example"><a href="https://raw.githubusercontent.com/redhat-developer/design-manual/main/brand-assets/RHD_Typography/RHD_Type_Examples_Uses/rh_ex_interstate.png"><img src="https://raw.githubusercontent.com/redhat-developer/design-manual/main/brand-assets/RHD_Typography/RHD_Type_Examples_Uses/rh_ex_interstate.png" width="200"></a></td>
      <td role="cell" data-label="Uses"><a href="https://raw.githubusercontent.com/redhat-developer/design-manual/main/brand-assets/RHD_Typography/RHD_Type_Examples_Uses/rh_which_typeface_interstate1.png"><img src="https://raw.githubusercontent.com/redhat-developer/design-manual/main/brand-assets/RHD_Typography/RHD_Type_Examples_Uses/rh_which_typeface_interstate1.png" width="400"></a></td>
    </tr>
    <tr role="row">
      <td role="cell" data-label="Typeface" style="vertical-align: top; word-break: normal;">
        Overpass
      </td>
      <td role="cell" data-label="Description" style="vertical-align: top;">
        Overpass is an open-licensed alternative to Interstate that is specifically for use on-screen and in our software. Like Interstate, Overpass is based on the FHWA (Federal Highway Administration) series of fonts, which has been used for US Highway signage since 1945. <br> Overpass can be used in a lot of the same ways as Interstate. We use Overpass for all web text, editable presentations, and product interfaces.
      </td>
      <td role="cell" data-label="Example">
        <a href="https://raw.githubusercontent.com/redhat-developer/design-manual/main/brand-assets/RHD_Typography/RHD_Type_Examples_Uses/rh_ex_overpass.png"><img src="https://raw.githubusercontent.com/redhat-developer/design-manual/main/brand-assets/RHD_Typography/RHD_Type_Examples_Uses/rh_ex_overpass.png" width="200"></a>
      </td>
      <td role="cell" data-label="Uses">
        <a href="https://raw.githubusercontent.com/redhat-developer/design-manual/main/brand-assets/RHD_Typography/RHD_Type_Examples_Uses/rh_which_typeface_overpass1.png"><img src="https://raw.githubusercontent.com/redhat-developer/design-manual/main/brand-assets/RHD_Typography/RHD_Type_Examples_Uses/rh_which_typeface_overpass1.png" width="400"></a>
      </td>
    </tr>
    <tr role="row">
      <td role="cell" data-label="Typeface" style="vertical-align: top; word-break: normal;">
        Liberation
      </td>
      <td role="cell" data-label="Description" style="vertical-align: top;">
        Liberation is metrically equivalent to the default fonts on non-Linux platforms. That means there are fewer issues with font conflicts and formatting when a document moves between platforms. <br> Use Liberation Sans for live, editable documents that will be shared outside of Red Hat. <br> Use Liberation Mono for code samples.
      </td>
      <td role="cell" data-label="Example">
        <a href="https://raw.githubusercontent.com/redhat-developer/design-manual/main/brand-assets/RHD_Typography/RHD_Type_Examples_Uses/rh_ex_liberation.png"><img src="https://raw.githubusercontent.com/redhat-developer/design-manual/main/brand-assets/RHD_Typography/RHD_Type_Examples_Uses/rh_ex_liberation.png" width="200"></a>
      </td>
      <td role="cell" data-label="Uses">
        <a href="https://raw.githubusercontent.com/redhat-developer/design-manual/main/brand-assets/RHD_Typography/RHD_Type_Examples_Uses/rh_which_typeface_liberation1.png"><img src="https://raw.githubusercontent.com/redhat-developer/design-manual/main/brand-assets/RHD_Typography/RHD_Type_Examples_Uses/rh_which_typeface_liberation1.png" width="400"></a>
      </td>
    </tr>
  </tbody>
</table>

## Examples

<h1 class="pf-c-title">Header XL</h1>

| Font family | Font size | Font weight | Line height | Class + Modifier | Viewport size |
| --- | --- | --- | --- | --- | --- |
| RedHatDisplay | 40px | 300 | 53 | `.pf-c-title .pf-m-4xl` | `992px & above`
| RedHatDisplay | 36px | 300 | 43.2 | `.pf-c-title .pf-m-4xl` | `991px to 480px`
| RedHatDisplay | 32px | 300 | 38.4 | `.pf-c-title .pf-m-4xl` | `479px & below`

{% highlight html %}
<h1 class="pf-c-title pf-m-4xl">"Design is where science and art break even."</h1>
{% endhighlight %}

<h1 style="font-size: 36px; font-weight: 300; line-height: 43.2px;">"Design is where science and art break even."</h1>
<h1 style="font-size: 32px; font-weight: 300; line-height: 38.4px;">"Design is where science and art break even."</h1>

<hr class="rhd-c-divider">

<h1 class="pf-c-title pf-m-2xl pf-u-mt-lg">Header 1</h1>

| Font family | Font size | Font weight | Line height | Class + Modifier or Element |
| --- | --- | --- | --- | --- |
| RedHatDisplay | 32px | 400 | 42 | `.pf-c-title .pf-m-3xl` |

{% highlight html %}
<h1 class="pf-c-title pf-m-3xl">"Design is where science and art break even."</h1>
<div class="pf-c-content">
  <h1>"Design is where science and art break even."</h1>
  <h1><a href="#" title="Design is where science and art break even. (Link)">"Design is where science and art break even. (Link)"</a></h1>
</div>
{% endhighlight %}

<hr class="rhd-c-divider">

<h1 class="pf-c-title pf-m-2xl pf-u-mt-lg">Header 2</h1>

| Font family | Font size | Font weight | Line height | Class + Modifier or Element |
| --- | --- | --- | --- | --- |
| RedHatDisplay | 28px | 400 | 31.2 | `.pf-c-title .pf-m-2xl` or `<h2>` |

{% highlight html %}
<h2 class="pf-c-title pf-m-2xl">"Design is where science and art break even."</h2>
<div class="pf-c-content">
  <h2>"Design is where science and art break even."</h2>
  <h2><a href="#" title="Design is where science and art break even. (Link)">"Design is where science and art break even. (Link)"</a></h2>
</div>
{% endhighlight %}

<hr class="rhd-c-divider">

<h1 class="pf-c-title pf-m-2xl pf-u-mt-lg">Header 3</h1>

| Font family | Font size | Font weight | Line height | Class + Modifier or Element |
| --- | --- | --- | --- | --- |
| RedHatDisplay | 20px | 400 | 30 | `.pf-c-title .pf-m-xl` or `<h3>` |

{% highlight html %}
<h3 class="pf-c-title pf-m-xl">"Design is where science and art break even."</h3>
<div class="pf-c-content">
  <h3>"Design is where science and art break even."</h3>
  <h3>
    <a href="#" title="Design is where science and art break even. (Link)">"Design is where science and art break even. (Link)"</a>
  </h3>
</div>
{% endhighlight %}

<hr class="rhd-c-divider">

<h1 class="pf-c-title pf-m-2xl pf-u-mt-lg">Header 4</h1>

| Font family | Font size | Font weight | Line height | Class + Modifier or Element |
| --- | --- | --- | --- | --- |
| RedHatDisplay | 18px | 400 | 27 | `.pf-c-title .pf-m-lg` or `<h4>` |

{% highlight html %}
<h4 class="pf-c-title pf-m-lg">"Design is where science and art break even."</h4>
<div class="pf-c-content">
  <h4>"Design is where science and art break even."</h4>
  <h4>
    <a href="#" title="Design is where science and art break even. (Link)">"Design is where science and art break even. (Link)"</a>
  </h4>
</div>
{% endhighlight %}

<hr class="rhd-c-divider">

<h1 class="pf-c-title pf-m-2xl pf-u-mt-lg">Standard text / Link text / Line text + hover</h1>

| Font family | Font size | Font weight | Line height | Color | Text decoration | Class or Element |
| --- | --- | --- | --- | --- | --- | --- |
| RedHatText | 16px | 400 | 24 | #333 | none | `<p>` |
| RedHatText | 16px | 400 | 24 | <span style="color: #0066CC">#0066cc</span> | none | `.pf-m-link` or `<a>` |
| RedHatText | 16px | 400 | 24 | <span style="color: #004080; text-decoration: underline;">#004080</span> | underline | `.pf-m-link` or `<a>` |

{% highlight html %}
<p>This is standard text for the developer site</p>
<a>This is link text for the developer site</a>
<p style="font-family: var(--pfe-theme--font-family); font-size: 16px; font-weight: 400; color: #004080; text-decoration: underline;">This is hovered link text for the developer site</p>
{% endhighlight %}

<hr class="rhd-c-divider">

<!-- Start Dark Section -->

<h1 class="pf-c-title pf-m-3xl pf-u-mt-lg">Dark typography - on dark background</h1>
<p>To properly use the dark theme, you can either place the content in a dark <code>< section ></code> with <code>class="pf-c-page__main-section pf-m-dark-100"</code>, wrap the content with <code>.pf-content</code> or add <code>pf-m-dark</code> to your element.</p>
<p>
<b>example:</b>
{% highlight html %}
<section class="pf-c-page__main-section pf-m-dark-100"><p>"Design is where science and art break even."</p></section>
<div class="pf-c-content pf-m-dark"><p>"Design is where science and art break even."</p></div>
<h1 class="pf-c-title pf-m-lg pf-m-dark">"Design is where science and art break even."</h1>
{% endhighlight %}
</p>

<h1 class="pf-c-title pf-m-2xl pf-u-mt-lg">Header XL</h1>

| Font family | Font size | Font weight | Line height | Class + Modifier | Viewport size |
| --- | --- | --- | --- | --- | --- |
| RedHatDisplay | 40px | 300 | 53 | `.pf-c-title .pf-m-4xl` | `992px & above`
| RedHatDisplay | 36px | 300 | 43.2 | `.pf-c-title .pf-m-4xl` | `991px to 480px`
| RedHatDisplay | 32px | 300 | 38.4 | `.pf-c-title .pf-m-4xl` | `479px & below`

{% highlight html %}
<h1 class="pf-c-title pf-m-4xl pf-m-dark">"Design is where science and art break even."</h1>
<section class="pf-c-page__main-section pf-m-dark-100">
  <h1 class="pf-c-title pf-m-4xl">"Design is where science and art break even."</h1>
</section>
{% endhighlight %}
<h1 style="font-size: 36px; font-weight: 300; line-height: 43.2px;">"Design is where science and art break even."</h1>
<h1 style="font-size: 32px; font-weight: 300; line-height: 38.4px;">"Design is where science and art break even."</h1>

<hr class="rhd-c-divider">

<h1 class="pf-c-title pf-m-2xl pf-u-mt-lg">Header 1</h1>

| Font family | Font size | Font weight | Line height | Class + Modifier or Element |
| --- | --- | --- | --- | --- |
| RedHatDisplay | 32px | 400 | 42 | `.pf-c-title .pf-m-3xl` |

{% highlight html %}
<h1 class="pf-c-title pf-m-3xl pf-m-dark">"Design is where science and art break even."</h1>
<section class="pf-c-page__main-section pf-m-dark-100">
  <h1 class="pf-c-title pf-m-3xl">"Design is where science and art break even."</h1>
</section>
{% endhighlight %}

<hr class="rhd-c-divider">

<h1 class="pf-c-title pf-m-2xl pf-u-mt-lg">Header 2</h1>

| Font family | Font size | Font weight | Line height | Class + Modifier or Element |
| --- | --- | --- | --- | --- |
| RedHatDisplay | 28px | 400 | 31.2 | `.pf-c-title .pf-m-2xl` or `<h2>` |

{% highlight html %}
<h1 class="pf-c-title pf-m-2xl pf-m-dark">"Design is where science and art break even."</h1>
<div class="pf-c-content pf-m-dark">
  <h2>"Design is where science and art break even."</h2>
</div>
<section class="pf-c-page__main-section pf-m-dark-100">
  <h2 class="pf-c-title pf-m-2xl">"Design is where science and art break even."</h2>
</section>
{% endhighlight %}

<hr class="rhd-c-divider">

<h1 class="pf-c-title pf-m-2xl pf-u-mt-lg">Header 3</h1>

| Font family | Font size | Font weight | Line height | Class + Modifier or Element |
| --- | --- | --- | --- | --- |
| RedHatDisplay | 20px | 400 | 30 | `.pf-c-title .pf-m-xl` or `<h3>` |

{% highlight html %}
<h1 class="pf-c-title pf-m-xl pf-m-dark">"Design is where science and art break even."</h1>
<div class="pf-c-content pf-m-dark">
  <h3>"Design is where science and art break even."</h3>
</div>
<section class="pf-c-page__main-section pf-m-dark-100">
  <h3 class="pf-c-title pf-m-xl">"Design is where science and art break even."</h3>
</section>
{% endhighlight %}

<hr class="rhd-c-divider">

<h1 class="pf-c-title pf-m-2xl pf-u-mt-lg">Header 4</h1>

| Font family | Font size | Font weight | Line height | Class + Modifier or Element |
| --- | --- | --- | --- | --- |
| RedHatDisplay | 18px | 400 | 27 | `.pf-c-title .pf-m-lg` or `<h4>` |

{% highlight html %}
<h4 class="pf-c-title pf-m-lg pf-m-dark">"Design is where science and art break even."</h4>
<div class="pf-c-content pf-m-dark">
  <h4>"Design is where science and art break even."</h4>
</div>
<section class="pf-c-page__main-section pf-m-dark-100">
  <h4 class="pf-c-title pf-m-lg">"Design is where science and art break even."</h4>
</section>
{% endhighlight %}

<hr class="rhd-c-divider">

<h1 class="pf-c-title pf-m-2xl pf-u-mt-lg">Standard text / Link text / Line text + hover</h1>

| Font family | Font size | Font weight | Line height | Color | Text decoration | Class |
| --- | --- | --- | --- | --- | --- | --- |
| RedHatText | 16px | 400 | 24 | #fff | none | |
| RedHatText | 16px | 400 | 24 | <span style="color: #0066CC">#0066cc</span> | none | `.pf-m-link` or `.pf-m-link.pf-m-dark` |
| RedHatText | 16px | 400 | 24 | <span style="color: #004080; text-decoration: underline;">#004080</span> | underline | |
| RedHatText | 16px | 400 | 24 | #fff | none | `.pf-m-link--secondary-on-dark` |
| RedHatText | 16px | 400 | 24 | <span style="color: #d2d2d2; text-decoration: underline;">#d2d2d2</span> | underline | |

{% highlight html %}
<div class="pf-c-content pf-m-dark">
  <p>White text</p>
  <p><a href="#" class="pf-m-link">Link on dark</a></p>
  <p><a href="#" class="pf-m-link--secondary-on-dark">Secondary link on dark</a></p>
</div>
<a href="#" class="pf-m-link pf-m-dark">Link on dark background without wrapper</a>
<section class="pf-c-page__main-section pf-m-dark-100">
  <a href="#" class="pf-m-link pf-m-dark">"Design is where science and art break even."</a>
</section>
{% endhighlight %}

<blockquote>
<div style="background-color: #151515; padding: 16px;">
  <p style="font-family: var(--pfe-theme--font-family); font-size: 16px; font-weight: 400; color: #fff;">This is standard text for the developer site</p>
  <p style="font-family: var(--pfe-theme--font-family); font-size: 16px; font-weight: 400; color: #73bcf7">This is link text for the developer site</p>
  <p style="font-family: var(--pfe-theme--font-family); font-size: 16px; font-weight: 400; color: #2b9af3; text-decoration: underline;">This is hovered link text for the developer site</p>
  <p style="font-family: var(--pfe-theme--font-family); font-size: 16px; font-weight: 400; color: #fff;">This is standard text for the developer site</p>
  <p style="font-family: var(--pfe-theme--font-family); font-size: 16px; font-weight: 400; color: #d2d2d2; text-decoration: underline;">This is hovered link text for the developer site</p>
</div>
</blockquote>

<hr class="rhd-c-divider">

<h1 class="pf-c-title pf-m-2xl pf-u-mt-lg">Light CTAs (dark - pfe-theme)</h1>

| Font family | Font size | Font weight | Line height | Color | Variation |
| --- | --- | --- | --- | --- | --- |
| RedHatDisplay | 16px | 700 | 23 | #fff | base |
| RedHatDisplay | 16px | 700 | 23 | <span style="color: #d2d2d2">#d2d2d2</span> | hover |
| RedHatDisplay | 16px | 700 | 23 | <span style="color: #73bcf7;">#73bcf7</span> | link |
| RedHatDisplay | 16px | 700 | 23 | <span style="color: #2b9af3">#2b9af3</span> | hover |

<blockquote>
<div style="background-color: #151515; padding: 16px;">
  <p style="font-family: var(--pfe-theme--font-family--heading); font-size: 16px; font-weight: 700; display: flex; align-items: center; color: #fff;">This is a light CTA for the developer site <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" style="width: 14px; margin-left: 6px;" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></p>
  <p style="font-family: var(--pfe-theme--font-family--heading); font-size: 16px; font-weight: 700; color: #d2d2d2; display: flex; align-items: center;">This is a light CTA for the developer site<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" style="width: 14px; margin-left: 6px;" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></p>
  <p style="font-family: var(--pfe-theme--font-family--heading); font-size: 16px; font-weight: 700; color: #73bcf7; display: flex; align-items: center;">This is a light CTA for the developer site<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" style="width: 14px; margin-left: 6px;" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></p>
  <p style="font-family: var(--pfe-theme--font-family--heading); font-size: 16px; font-weight: 700; color: #2b9af3; display: flex; align-items: center;">This is a light CTA for the developer site<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" style="width: 14px; margin-left: 6px;" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></p>
</div>
</blockquote>
