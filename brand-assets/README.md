# Brand Assets

To add or update Brand Assets to the site, you will need to create and/or edit an asset directory page. This allows the site to render the given page with the correct images, layout, and information.

## Adding New Assets

There are two types of additions in regards to adding new brand assets:

  1. adding an asset to an existing page
  2. adding new assets with a new page

### New asset to existing page
In order to add a new asset to existing page, you simply have to update the page frontmatter and add a link to the new asset.

**Old**
```markdown
---
layout: design
title: Full Logos
permalink: brand-assets/RHD_Full_Logo/full-logo
active_header: Full Logos
section: resources
image1: NewRHDFullLogo_color.png
image2: NewRHDFullLogo_color_white-wordmark.png
---

## {{ page.image1 }}
  <img src="{{ page.image1 }}" alt="Image of {{ page.image1 }}">

## {{ page.image2 }}
  <img src="{{ page.image2 }}" alt="Image of {{ page.image2 }}">
```
**New**
```markdown
---
layout: design
title: Full Logos
permalink: brand-assets/RHD_Full_Logo/full-logo
active_header: Full Logos
section: resources
image1: NewRHDFullLogo_color.png
image2: NewRHDFullLogo_color_white-wordmark.png
image3: NewRHDFullLogo_4-color.png
---

## {{ page.image1 }}
  <img src="{{ page.image1 }}" alt="Image of {{ page.image1 }}">

## {{ page.image2 }}
  <img src="{{ page.image2 }}" alt="Image of {{ page.image2 }}">

## {{ page.image3 }}
  <img src="{{ page.image3 }}" alt="Image of {{ page.image3 }}">
```

### New asset with new page

## Updating Brand Assets

When updating a brand asset, you can either replace the asset with the same name/image type (thus only needing to replace the file and not update anything else), or you can replace the asset and update the page.

