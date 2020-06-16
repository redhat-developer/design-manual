# Red Hat Developer Design Manual Setup Guide
This repository contains examples of components and assemblies used on the [developers.redhat.com](https://developers.redhat.com) site.

The RHDM documentation site is built using Jamstack (JavaScript, APIs, and Markup) technologies ([What is Jamstack?](https://jamstack.org/)) Specifically, we use the technologies recommended by [Netlify CMS - Jekyll](https://www.netlifycms.org/docs/jekyll/).

Table of Contens:
1. [Helpful Links](#helpful-links)
2. [Technology Stack](#technology-stack)
3. [Installation](#installation)
4. [Initialize the Git Submodule](#initialize-the-git-submodule)
5. [Development](#development)

----
## Helpful Links
  - [GitHub Repo for developers.redhat.com](https://github.com/redhat-developer/developers.redhat.com)
    - submodule included in this project - styles for examples components/pages are located here
  - [CodePen Templates](https://codepen.io/collection/AEwLNY)
    - live starter templates for a select number of components and pages
  - [CodePen Examples](help/codepen-examples)
    - Embedded CodePen examples

----
## Technology stack:
  - [Ruby (2.6.3)](https://www.ruby-lang.org/en/) - For installing Jekyll
  - [Jekyll (3.8)](https://jekyllrb.com/) - static site server
  - [Node (10.16.0)](https://nodejs.org/en/) - managing front-end dependencies
    - _[NVM](https://nodejs.org/en/download/package-manager/#nvm) is recommended_
    - NPM (6.13.2)
  - [Gulp](https://gulpjs.com/) - automation and streaming build workflow
    - CLI: 2.2.0
    - Local: 4.0.2
  - [SCSS](https://sass-lang.com/) - CSS extension language
  - [PatternFly](https://www.patternfly.org) - front-end framework
    - __Note:__ If new to PatternFly, check out their site: [www.patternfly.org](https://www.patternfly.org/v4/get-started/about)

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

To install the site's dependencies and configure the required [submodule](#initialize-the-git-submodule), run out setup script.

```bash
$ scripts/./setup.sh
```

## Initialize the Git Submodule

The Red Hat Developer Design Manual is built using the Red Hat Developer site's styles. These are referenced through a Git Submodule (developers.redhat.com). In order to build the project with the Red Hat Developer styles, you will need to initialize the developers.redhat.com submodule. __IF YOU RAN THE `SETUP.SH` SCRIPT, YOU CAN STOP HERE.__

You do so by running the `submodule.sh` file in the `scripts/` folder:

```bash
$ scripts/./submodule.sh
```

  _This will connect the submodule to the repo using the `.gitsubmodules` file, update the submodule, and install any necessary dependencies. It will then return you to the project root._

#### NOTE
If you will be working on the Design Manual site for a long period of time, you will want to periodically pull in updates for the submodule in order to keep everything in sync. You can easily check and apply updates using the same `submodule.sh` script.

After updating, you should see `modified:   developers.redhat.com (new commits)` when you check the `git status`. You can then add the updated submodule to your fork but running `git add .` and `git commit -m "Update submodule MM/DD/YYYY"`.

----
## Development

At this point you are ready to start developing for the Design Manual site. In an effort to make the documentation easier to follow, we have broken out this section into a separate document. [Developing for the Red Hat Developer Design Manual Site](DEVELOPMENT.md)

----
[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/redhat-developer/design-manual)

[![ForTheBadge uses-git](http://ForTheBadge.com/images/badges/uses-git.svg)](https://github.com/topics/git)
[![ForTheBadge uses-html](http://ForTheBadge.com/images/badges/uses-html.svg)](https://github.com/topics/html)
[![ForTheBadge uses-css](http://ForTheBadge.com/images/badges/uses-css.svg)](https://github.com/topics/css)
