# Default Frontmatter

Each section has a different default Frontmatter. See the guide below for details.

**Develop**
```yaml
---
layout: [ SELECT A LAYOUT]
category: [ DEFINE CATEGORY - DEFAULTS TO DEVELOP ]
section: [ DEFINE PAGE SECTION - MATCHES LAYOUT]
title: [ INSERT TITLE ]
subtitle: [ OPTIONAL SUBTITLE ]
nav: [ WHAT SIDENAV OPTION SHOULD BE HIGHLIGHTED WHEN A PAGE IS ACTIVE ]
permalink: [ DEFINE YOUR PATH ]
status: [ SET RELEASE STATUS - RELEASED, UNRELEASED, DEVELOPMENT ]
intro_paragraph: [ OPTIONAL INTRODUCTORY PARAGRAPH - REMOVE IF NOT NEEDED ]
custom_js: [ OPTIONAL CUSTOM JS ]
custom_css: [ OPTIONAL CUSTOM CSS ]
---
```

**Create**
```yaml
---
layout: [ SELECT A LAYOUT]
category: [ DEFINE CATEGORY - DEFAULTS TO DEVELOP ]
section: [ DEFINE PAGE SECTION - MATCHES LAYOUT]
permalink: [ DEFINE YOUR PATH ]
title: [ INSERT TITLE ]
nav: [ WHAT SIDENAV OPTION SHOULD BE HIGHLIGHTED WHEN A PAGE IS ACTIVE ]
intro_paragraph: [ OPTIONAL INTRODUCTORY PARAGRAPH - REMOVE IF NOT NEEDED ]
custom_js: [ OPTIONAL CUSTOM JS ]
custom_css: [ OPTIONAL CUSTOM CSS ]
---
```

**Assemblies**
```yaml
---
layout: [ SELECT A LAYOUT]
category: [ DEFINE CATEGORY - DEFAULTS TO DEVELOP ]
section: [ DEFINE PAGE SECTION - MATCHES LAYOUT]
title: [ INSERT TITLE ]
nav: [ WHAT SIDENAV OPTION SHOULD BE HIGHLIGHTED WHEN A PAGE IS ACTIVE ]
permalink: [ DEFINE YOUR PATH ]
status: [ SET RELEASE STATUS - RELEASED, UNRELEASED, DEVELOPMENT ]
youtube_video: [ FEATURED VIDEO FOR THE ASSEMBLY EXAMPLE ]
video-title: [ TITLE FOR THE VIDEO ]
intro_paragraph: [ OPTIONAL INTRODUCTORY PARAGRAPH - REMOVE IF NOT NEEDED ]
---
```

**Layouts**
```yaml
---
layout: [ SELECT A LAYOUT]
category: [ DEFINE CATEGORY - DEFAULTS TO DEVELOP ]
section: [ DEFINE PAGE SECTION - MATCHES LAYOUT]
title: [ INSERT TITLE ]
nav: [ WHAT SIDENAV OPTION SHOULD BE HIGHLIGHTED WHEN A PAGE IS ACTIVE ]
permalink: [ DEFINE YOUR PATH ]
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
