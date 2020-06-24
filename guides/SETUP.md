# Red Hat Developer Design Manual Setup Guide
This repository contains examples of components and assemblies used on the [developers.redhat.com](https://developers.redhat.com) site.

The RHDM documentation site is built using Jamstack (JavaScript, APIs, and Markup) technologies ([What is Jamstack?](https://jamstack.org/)) Specifically, we use the technologies recommended by [Netlify CMS - Jekyll](https://www.netlifycms.org/docs/jekyll/).

Table of Contens:
1. [Helpful Links](#helpful-links)
2. [Technology Stack](#technology-stack)
3. [Installation](#installation)
4. [Development](#development)

----
## Helpful Links
  - [CodePen Templates](https://codepen.io/collection/AEwLNY)
    - live starter templates for a select number of components and pages
  - [CodePen Examples](help/codepen-examples)
    - Embedded CodePen examples

----
## Technology stack:
  - [Ruby](https://www.ruby-lang.org/en/) (2.6+ - for Jekyll) - For installing Jekyll
  - [Jekyll](https://jekyllrb.com/) - static site server
  - [Node (10+)](https://nodejs.org/en/) - managing front-end dependencies
    - _[NVM](https://nodejs.org/en/download/package-manager/#nvm) is recommended_
    - NPM (6+)
  - [Gulp](https://gulpjs.com/) - automation and streaming build workflow
    - CLI: 2.2.0
    - Local: 4.0.2
  - [SCSS](https://sass-lang.com/) - CSS extension language
  - PatternFly - front-end framework
    - __Note:__ If new to PatternFly, check out their site: [www.patternfly.org](https://www.patternfly.org)

----
## Installation
All processes are controlled through various Gulp functions. This enables us to tightly control each step in the build and to handle all of the resources required for this site. For the Design Manual site, we use [Homebrew](https://brew.sh/) on macOS to manage and install the requires software. To install the dependencies (listed in the [Technology Stack](#technology-stack), run the following commands:

---
__Fork and Clone the Repository__
_If you have not already done so, be sure to fork and clone the design-manual repo before continuing._

```bash
git clone git@github.com:YOUR_USER_NAME/design-manual.git
cd design-manual
git remote add -f upstream git@github.com:redhat-developer/design-manual.git
```
---

```bash
$ brew install ruby
$ brew install node
$ gem install jekyll
$ npm install gulp-cli -g
```

```bash
$ scripts/./setup.sh
```

----
## Development

At this point you are ready to start developing for the Design Manual site. In an effort to make the documentation easier to follow, we have broken out this section into a separate document. [Developing for the Red Hat Developer Design Manual Site](DEVELOPMENT.md)

----
[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/redhat-developer/design-manual)

[![ForTheBadge uses-git](http://ForTheBadge.com/images/badges/uses-git.svg)](https://github.com/topics/git)
[![ForTheBadge uses-html](http://ForTheBadge.com/images/badges/uses-html.svg)](https://github.com/topics/html)
[![ForTheBadge uses-css](http://ForTheBadge.com/images/badges/uses-css.svg)](https://github.com/topics/css)
