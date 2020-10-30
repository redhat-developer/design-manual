---
layout: create
category: create
section: Create
title: Curated products
active_nav: Assemblies
status: released
video-title: RHD Curated Products Creation Demo
featured_image: ""
permalink: /assemblies/curated-products
youtube_video: qsG41sNQiyk
intro_paragraph: >-
  This assembly allows the content creator to simply chose from any Red Hat
  product(s), it will automatically be displayed as a card with. 

  In order to use this assembly, the desired product must exist in the CMS as a product node.
---
## What content types can I add this assembly to?

View example usage of the curated products assembly in production on the [Products page](https://developers.redhat.com/products).

* Articles 
* Pages
* Event
* Landing page
* Single offer
* Product
* Topic

## How do I get the content pulled in?

As with most assemblies, you can add a title manually to have displayed to the user. 

Then, you just start typing the name of the product into the 'Product' field. This typeahead field will populate **product node references** that fit your input, and you must choose one of those options.

Because you are pulling in content via the product node reference, the logo, short description, and 'Download' link.

You can also add a button underneath the cards to link off to the location of your choice. You can choose the display text on the button, but some suggestions are:

* Learn more
* View all

**Note**: there are a few products that don't have a logo (or the correct logo) associated with the product node. This is a known issue and can be tracked here (Mary to open issue and link it here). 

## Do I have any choices for how this assembly displays on the page?

Tenichally, yes. We can display curated links in two different formats using 'Display type', with the options of

* Display type: **\--none--** 
* Display type: **\--Basic cards--** 
* Display type: **\--Featured cards--** 

But, **all three currently work the same**. This is a known issue, and you can track progress on this issue here. All of them currently display like this:

![Curated products](/design-manual//assets/uploads/curated-products.png)