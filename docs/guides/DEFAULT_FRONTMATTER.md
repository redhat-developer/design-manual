# Default Frontmatter

```yaml
---
layout: [ SELECT A LAYOUT]
title: [ INSERT TITLE }
subtitle: [ OPTIONAL SUBTITLE ]
permalink: [ DEFINE YOUR PATH ]
custom_js: [ OPTIONAL CUSTOM JS ]
custom_css: [ OPTIONAL CUSTOM CSS ]
section: [ DEFINE PAGE SECTION - MATCHES LAYOUT]
intro_paragraph: [ OPTIONAL INTRODUCTORY PARAGRAPH - REMOVE IF NOT NEEDED ]
---
```

Need more than one custom JS or CSS file loaded? You can do so like so:
```yaml
custom_js:
 - jquery.min
 - panels
 - code-snippets
custom_css:
 - tabs
 - alternate.min
```
