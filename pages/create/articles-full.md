---
layout: full-page-examples
category: create
section: Content Types
permalink: /create/articles-full
title: Full screen Article example
active_nav: Content_types
status: development
intro_paragraph: >

compose_image: wordpress-articles.png
---

<style>
.meta-info {
  align-items: center;
  margin-bottom: var(--rhd-theme--container-spacer-sm);
}

.meta-info .share-buttons .a2a_default_style a {
  padding: 0 var(--rhd-theme--container-spacer-md) 0 0;
}

.meta-info .share-buttons {
  border-right: 0;
  border-left-color: #737679;
}

.tag-label {
  color: var(--pf-global--Color--light-300);
}

.rhd-c-article .article-toc {
  position: absolute;
  z-index: 100;
  width: 330px;
  background-color: var(--pf-global--BackgroundColor--100);
}

.article-toc.rhd-m-closed {
  display: none;
}

.article-toc.rhd-m-open {
  display: block;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, .06), 0 4px 8px 0 rgba(0, 0, 0, .12);
}

.article-toc-button {
  float: left;
  width: 40px;
  height: 40px;
  padding: 10px;
  margin: var(--rhd-theme--container-spacer-sm) var(--rhd-theme--container-spacer-md);
  background-color: var(--pf-global--BackgroundColor--100);
  border-radius: 100%;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, .06), 0 4px 8px 0 rgba(0, 0, 0, .12);
}

.article-toc-button.rhd-m-open {
  margin: 0 var(--pf-global--spacer--lg) 0 0;
}

.rhd-c-card-content > .rhd-c-card__title:first-child {
  margin-top: 0;
  margin-bottom: var(--pf-global--spacer--lg);
}

.pf-c-content h3:not(:first-child) {
  margin-top: 0;
  margin-bottom: var(--pf-global--spacer--lg);
}

.pf-c-label.pf-m-outline {
  font-size: var(--pf-global--FontSize--sm);
  color: var(--pf-global--Color--100);
  background-color: var(--pf-global--BackgroundColor--100);
  border: 1px solid var(--pf-global--BorderColor--100);
  border-radius: var(--pf-global--BorderRadius--lg);
}

.pf-c-label__content {
  text-transform: none;
}

.pf-m-green .pf-c-label__icon {
  color: var(--pf-global--palette--green-500, #3e8635);
}

.pf-m-blue .pf-c-label__icon {
  color: var(--pf-global--palette--blue-400, #06c);
}

.pf-m-grey .pf-c-label__icon {
  color: var(--pf-global--palette--black-400, #b8bbbe);
}

.pf-m-orange .pf-c-label__icon {
  color: var(--pf-global--palette--orange-300, #ec7a08);
}

.pf-m-red .pf-c-label__icon {
  color: var(--pf-global--palette--red-100, #c9190b);
}

.rhd-c-submit-feedback {
  display: inline-flex;
}

.rhd-c-submit-feedback__input {
  display: inline;
  min-height: 20px;
}

.rhd-c-submit-feedback__input .pf-c-input-group textarea {
  height: 40px;
  min-height: 40px;
  max-height: 300px;
}

.rhd-c-series-list {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-top: var(--pf-global--spacer--xl);
  margin-bottom: var(--pf-global--spacer--sm);
}

.rhd-c-series-list__count {
  font-size: var(--pf-global--FontSize--sm);
  color: var(--pf-global--palette--black-600);
}

/* Tertiary navigation with Overflow */
.rhd-c-series-items .pf-c-nav.pf-m-tertiary {
  position: relative;
  box-sizing: border-box;
  display: flex;
  height: 80px;
  padding: 0;
  margin: 0;
  font-family: RedHatText, Overpass, overpass, helvetica, arial, sans-serif;
  font-size: var(--pf-global--FontSize--md);
  font-weight: normal;
  line-height: 24px;
  color: rgb(21, 21, 21);
  text-align: left;
  background-color: rgba(0, 0, 0, 0);
}

.rhd-c-series-items .pf-c-nav__list {
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-basis: 0%;
  flex-grow: 1;
  width: auto;
  max-width: 100%;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  font-family: RedHatText, Overpass, overpass, helvetica, arial, sans-serif;
  font-size: var(--pf-global--FontSize--md);
  font-weight: 400;
  line-height: 24px;
  color: rgb(21, 21, 21);
  text-align: left;
  white-space: nowrap;
  list-style: none;
  list-style-position: outside;
  list-style-type: none;
  list-style-image: none;
  background-color: rgba(0, 0, 0, 0);
  flex-shrink: 1;
  margin-block-end: 0;
  margin-block-start: 0;
  margin-inline-end: 0;
  margin-inline-start: 0;
  padding-inline-start: 0;
}

.rhd-c-series-items .pf-c-nav__list > .pf-c-nav__item {
  position: relative;
  box-sizing: border-box;
  display: flex;

  /* width: 159.5px; */
  height: 35px;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  font-family: RedHatText, Overpass, overpass, helvetica, arial, sans-serif;
  font-size: var(--pf-global--FontSize--md);
  font-weight: 400;
  line-height: 24px;
  color: rgb(21, 21, 21);
  text-align: left;
  white-space: nowrap;
  list-style-position: outside;
  list-style-image: none;
  background-color: rgba(0, 0, 0, 0);
}

.rhd-c-series-items .pf-c-nav.pf-m-tertiary .pf-c-nav__link {
  align-items: center;
  align-self: stretch;
  padding: var(--pf-global--spacer--sm) var(--pf-global--spacer--md);
  white-space: nowrap;
  list-style-type: none;
}

.rhd-c-series-items .pf-c-nav__link {
  color: var(--pf-global--palette--black-600);
}

.rhd-c-series-items .pf-c-nav__link.pf-m-current {
  font-weight: 400;
  color: var(--pf-global--palette--black-900);
  background-color: transparent;
}

.rhd-c-series-items .pf-c-nav__link:hover {
  color: var(--pf-global--palette--black-900);
}

.rhd-c-series-items .pf-c-nav__link::after,
.rhd-c-series-items .pf-c-nav__link:hover::after {
  background-color: transparent;
}

.rhd-c-series-items .pf-c-nav__link.pf-m-current::after,
.rhd-c-series-items .pf-c-nav__link.pf-m-current:hover::after {
  background-color: transparent;
}

.rhd-c-series-items .pf-c-nav__item:first-child > .pf-c-nav__link,
.rhd-c-series-items .pf-c-nav__item:first-child > .pf-c-nav__link:hover::after,
.rhd-c-series-items .pf-c-nav__link:first-child > .pf-c-nav__link:hover::before {
  left: 0;
  padding-top: 0;
  padding-right: var(--pf-global--spacer--md);
  padding-left: 0;
}

.rhd-c-series-items .pf-c-nav__link {
  padding-top: 0;
  padding-right: var(--pf-global--spacer--md);
  padding-left: var(--pf-global--spacer--md);
}

.rhd-c-series-items .pf-c-nav__link {
  border-bottom: var(--pf-global--BorderWidth--sm) solid var(--pf-global--palette--black-600);
}

.rhd-c-series-items .pf-c-nav__link:hover::before,
.rhd-c-series-items .pf-c-nav__link.pf-m-current::before,
.rhd-c-series-items .pf-c-nav__link.pf-m-current:hover::before {
  position: absolute;
  top: 23px;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  display: block;
  height: 3px;
  padding: var(--pf-global--spacer--xs);
  padding-left: 0;
  margin: 0;
  content: "";
  background-color: rgba(0, 0, 0, 0);
  border-top-color: var(--pf-global--active-color--100);
  border-top-style: solid;
  border-top-width: 0;
  border-right-color: var(--pf-global--active-color--100);
  border-right-style: solid;
  border-right-width: 0;
  border-bottom-color: var(--pf-global--active-color--100);
  border-bottom-style: solid;
  border-bottom-width: var(--pf-global--BorderWidth--lg);
  border-left-color: var(--pf-global--active-color--100);
  border-left-style: solid;
  border-left-width: 0;
  border-image-source: none;
  border-image-slice: 100%;
  border-image-width: 1;
  border-image-outset: 0;
  border-image-repeat: stretch;
}

.rhd-c-series-items.pf-c-nav .pf-c-nav__scroll-button {
  top: -5px !important;
  right: 0 !important;
  left: initial !important;
  display: block !important;
  width: auto !important;
  padding-bottom: var(--pf-global--spacer--xs);
  padding-left: 6px;
  margin-left: 0;
  color: var(--pf-global--link--Color);
  visibility: visible !important;
  border-bottom: var(--pf-global--BorderWidth--sm) solid var(--pf-global--palette--black-600);
  box-shadow: 0 0 3px #ddd;
}

.rhd-c-series-items.pf-c-nav .pf-c-nav__scroll-button:hover {
  color: var(--pf-global--link--Color--hover);
}

.rhd-c-series-items .pf-c-nav__scroll-button:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  content: "";
  border: solid transparent;
  border-top-width: 0;
  border-right-width: var(--pf-global--BorderWidth--sm);
  border-bottom-width: 0;
  border-left-width: var(--pf-global--BorderWidth--sm);
}

.rhd-c-series-items .pf-c-nav__scroll-button:nth-of-type(2):before {
  left: 0;
}

.rhd-c-series-items .pf-c-nav.pf-m-scrollable .pf-c-nav__scroll-button {
  flex: none;
  width: 44px;
  color: #151515;
  background-color: transparent;
  border: 0;
  outline-offset: calc(-1*.25rem);
  opacity: 1;
  transition: margin .125s, transform .125s, opacity .125s;
}
.rhd-c-series-items .pf-c-nav.pf-m-scrollable .pf-c-nav__scroll-button:nth-of-type(2) {
  box-sizing: border-box;
  display: block;
  flex-basis: auto;
  flex-grow: 0;
  align-items: flex-start;
  width: 44px;
  height: 40px;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  font-family: RedHatText, Overpass, overpass, helvetica, arial, sans-serif;
  font-size: var(--pf-global--FontSize--md);
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: rgb(21, 21, 21);
  text-align: center;
  text-indent: 0;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-spacing: 0;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border-top-color: rgb(21, 21, 21);
  border-top-style: none;
  border-top-width: 0;
  border-right-color: rgb(21, 21, 21);
  border-right-style: none;
  border-right-width: 0;
  border-bottom-color: rgb(21, 21, 21);
  border-bottom-style: none;
  border-bottom-width: 0;
  border-left-color: rgb(21, 21, 21);
  border-left-style: none;
  border-left-width: 0;
  border-image-source: none;
  border-image-slice: 100%;
  border-image-width: 1;
  border-image-outset: 0;
  border-image-repeat: stretch;
  outline-offset: -4px;
  opacity: 1;
  transition-delay: 0s, 0s, 0s;
  transition-timing-function: ease, ease, ease;
  transition-duration: .125s, .125s, .125s;
  transition-property: margin, transform, opacity;
  transform: matrix(1, 0, 0, 1, 0, 0);
  flex-shrink: 0;
  font-variant-caps: normal;
  writing-mode: horizontal-tb;
}
</style>

<section class="pf-c-content">
  <div role="article" about="https://developers.redhat.com/coderland/serverless/serverless-knative-intro/" class="component rhd-c-article author-left" level="Beginner" id="rhd-article">
    <div class="pf-l-grid pf-m-gutter">
      <div class="article-info-wrapper pf-l-grid__item pf-m-12-col-on-sm pf-m-9-col-on-lg">
        <div class="article-info-left">
          <p class="article-type">
            Article
          </p>
          <h1 id="developer-materials">
            <span class="field field--name-title field--type-string field--label-hidden">Title of the article #1 goes here - it should wrap if it doesn't fit on one line, because we want the user to see the full title, not just a truncated version of it.</span>
          </h1>
          <div class="pf-u-display-flex pf-u-align-items-center">
            <div class="pf-u-display-inline-flex pf-u-flex-direction-column pf-u-mr-3xl">
              <div class="meta-info">
                <div class="publish-date">06/30/2020</div>
                  <div class="share-buttons">
                    <div class="a2a_kit a2a_default_style">
                      <a class="a2a_button_twitter" aria-label="Share on twitter">
                        <i class="fab fa-twitter" title="Share on twitter"></i>
                      </a>
                      <a class="a2a_button_facebook" aria-label="Share on facebook">
                        <i class="fab fa-facebook-f" title="Share on facebook"></i>
                      </a>
                      <a class="a2a_button_linkedin" aria-label="Share on linkedin">
                        <i class="fab fa-linkedin-in" title="Share on linkedin"></i>
                      </a>
                      <a class="a2a_button_email" aria-label="Share with email">
                        <i class="fas fa-envelope" title="Share with email"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="topics">
                  <span class="tag-label">
                    <i class="fas fa-tag fa-sm" title="Tags:"></i>
                  </span>
                  <a href="https://developers.redhat.com/topics/containers/">Containers</a>,
                  <a href="https://developers.redhat.com/topics/kubernetes/">Kubernetes</a>,
                  <a href="https://developers.redhat.com/topics/serverless-architecture/">Serverless</a>
                </div>
              </div>
              <div class="pf-u-display-inline-flex pf-u-flex-direction-column">
                <div class="authors">
                  <div role="article" about="/authors/author-name/" class="rhd-c-author--tile">
                    <span class="rhd-c-author--tile-hero">
                      <img src="{{site.baseurl}}/assets/uploads/rhd-default-user-visual.svg" />
                    </span>
                    <div class="rhd-c-author--tile-info">
                      <div class="rhd-c-author--tile-name">
                        <a href="https://developers.redhat.com/authors/">
                          <span class="field field--name-title field--type-string field--label-hidden">Author Name</span>
                        </a>
                      </div>
                      <div class="rhd-c-author--tile-title field__item">
                        Title or Role
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="floated-image pf-l-grid__item pf-m-12-col-on-sm pf-m-3-col-on-lg">
          <img src="https://images.pexels.com/photos/544067/pexels-photo-544067.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=600" width="600" height="315" alt="Serverless computing in action" typeof="foaf:Image" class="image-style-article-floated" />
        </div>
        <div class="pf-l-grid__item">
          <div class="pf-l-flex pf-m-align-items-flex-start">
            <div class="article-toc rhd-m-open pf-u-hidden">
              <ul class="pf-c-data-list pf-m-compact toc gsi-nav" role="list" aria-label="Article outline" style="padding-top: 6px;">
                <li class="pf-c-data-list__item">
                  <div class="pf-c-data-list__item-row" style="padding-left: 14px;">
                    <div class="pf-c-data-list__item-content">
                      <div class="pf-c-data-list__cell pf-u-display-flex pf-u-align-items-center" style="padding-top: 0;">
                        <span class="article-toc-button rhd-m-open" id="hide-article-toc">
                          <i class="far fa-arrow-left fa-lg" style="color: #06c;"></i>
                        </span>
                        Article Outline
                      </div>
                    </div>
                  </div>
                </li>
                <li class="pf-c-data-list__item">
                  <div class="pf-c-data-list__item-row">
                    <div class="pf-c-data-list__item-content">
                      <div class="pf-c-data-list__cell">
                        <a href="#the_compile_driver">The Compile Driver</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="pf-c-data-list__item">
                  <div class="pf-c-data-list__item-row">
                    <div class="pf-c-data-list__item-content">
                      <div class="pf-c-data-list__cell">
                        <a href="#the_compile_driver">Your assignment</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="pf-c-data-list__item">
                  <div class="pf-c-data-list__item-row">
                    <div class="pf-c-data-list__item-content">
                      <div class="pf-c-data-list__cell">
                        <a href="#the_compile_driver">A brief word about serverless that is long and has to wrap to a new line</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="pf-c-data-list__item">
                  <div class="pf-c-data-list__item-row">
                    <div class="pf-c-data-list__item-content">
                      <div class="pf-c-data-list__cell">
                        <a href="#the_compile_driver">Getting from here to there</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="pf-c-data-list__item">
                  <div class="pf-c-data-list__item-row">
                    <div class="pf-c-data-list__item-content">
                      <div class="pf-c-data-list__cell">
                        <a href="#the_compile_driver">What's next</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="article-content pf-l-flex__item pf-m-align-self-flex-start gsi fetch-toc">
              <div class="no-padding-top no-padding-bottom assembly assembly-type-rich_text component rich-text pf-c-content"
                  id="assembly-field-content-11395">
                <div class="pf-l-grid pf-m-gutter">
                  <div class="pf-l-grid__item">
                    <div class="rich-text-content">
                      <span class="article-toc-button" id="show-article-toc">
                        <i class="far fa-arrow-right fa-lg" style="color: #06c;"></i>
                      </span>
                      <p>Nulla sed tellus ultricies, feugiat ante dapibus, elementum ligula. Nam et
                          mauris sed nibh cursus auctor vehicula ut nisi. Sed vestibulum nisi eget
                          urna tempor placerat. Sed in vestibulum urna. Orci varius natoque penatibus
                          et magnis dis parturient montes, nascetur ridiculus mus. Morbi porttitor a
                          nisl eget tempor. Proin pellentesque turpis eu rutrum faucibus. Ut sit amet
                          nisi ac nulla ornare molestie. Aliquam ultricies aliquam semper. Phasellus
                          ac consequat ligula, nec pulvinar tellus. Pellentesque iaculis orci vitae
                          lacus facilisis, a pellentesque dui aliquam. Nulla vestibulum neque a nibh
                          dictum, nec mattis diam suscipit. Phasellus facilisis lorem id odio
                          porttitor, sit amet volutpat ipsum dapibus. Duis pretium nibh nec
                          condimentum aliquam. Duis eleifend elit orci, a accumsan sem posuere
                          molestie. Proin at urna sit amet neque posuere laoreet.</p>
                      <p>Nulla luctus tristique eleifend. In nunc ipsum, vehicula in euismod ut,
                          ullamcorper quis orci. Duis vel luctus dolor, nec mollis felis. Nunc
                          vehicula porta blandit. Fusce non turpis ullamcorper, tempus urna ac,
                          scelerisque magna. Maecenas porttitor enim id ipsum placerat consequat.
                          Curabitur nulla nulla, convallis a sem efficitur, finibus pellentesque
                          metus. Nullam lobortis sed ex nec vulputate. Aliquam erat volutpat. Sed
                          congue viverra egestas.</p>
                      <blockquote>
                          This is a featured quote. It can be as many lines as it needs to be to show the whole quote that was inputed.
                      </blockquote>
                      <p>Quisque leo odio, pulvinar vel nibh ut, fringilla dictum diam. Proin a diam
                          iaculis, facilisis orci vel, posuere dolor. Praesent porta placerat ligula,
                          non finibus ligula volutpat nec. In pulvinar nec metus quis malesuada.
                          Aliquam risus mi, tincidunt et risus nec, mattis tincidunt elit. Etiam nec
                          elit eu ligula tristique pretium sit amet eget nibh. Praesent gravida, purus
                          quis ullamcorper euismod, nibh mauris condimentum quam, ac fermentum nibh
                          odio et sem. Nulla tincidunt euismod ante sed maximus. Nam laoreet quam non
                          mauris iaculis, et pharetra lectus faucibus. Sed nisl augue, vestibulum
                          vitae augue ut, ultricies dapibus orci. Etiam et nibh nulla. Morbi faucibus
                          rhoncus justo, placerat placerat erat tempor at. Duis vulputate luctus
                          euismod. Aliquam sed odio odio.</p>
                      <p>Curabitur dui augue, rutrum vel dapibus a, placerat a mi. Proin ante risus,
                          scelerisque ultricies dolor id, sodales mollis augue. Curabitur pharetra
                          turpis dui. Nam non eros sapien. Nunc a dui vel massa dictum interdum nec ut
                          neque. Quisque finibus sodales ultrices. Quisque nec condimentum leo, in
                          scelerisque odio. Proin eu tincidunt ex. Proin eleifend ex egestas sem
                          elementum porttitor. Duis id varius ligula, ac ultricies libero. Integer sed
                          erat in lorem dapibus malesuada. Aliquam erat volutpat. Phasellus id est et
                          nisi imperdiet aliquam.</p>
                      <p>Etiam in enim ut mi accumsan tempor a quis massa. Suspendisse non maximus
                          orci, vitae tincidunt odio. Praesent molestie hendrerit elementum. Proin
                          efficitur erat ultricies, bibendum augue vitae, interdum turpis. Duis
                          pretium dolor turpis, vitae condimentum nulla consectetur eget. Nullam
                          mollis, velit maximus maximus dapibus, lacus felis euismod purus, quis
                          convallis odio tellus tristique est. Ut dolor dolor, consectetur nec leo
                          fringilla, elementum malesuada nisl. Aliquam velit urna, congue at ornare
                          quis, venenatis sit amet justo. Aenean condimentum nibh a sollicitudin
                          semper. Mauris gravida arcu vitae hendrerit porta. </p>
                    </div>
                  </div>
                </div>
              </div>
              <i class="changed-date">Last updated: October 17, 2019</i>
              <div class="rhd-l-bonus-content-item">
                <div class="pf-l-grid rhd-l-bonus-content-item-grid">
                  <div class="pf-l-grid__item pf-m-12-col">
                    <div class="pf-l-grid pf-m-gutter">
                      <div class="pf-l-grid__item pf-m-1-col pf-u-display-flex pf-u-align-items-center rhd-c-avatar--container">
                        <img class="pf-c-avatar rhd-c-avatar" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Content image">
                      </div>
                      <div class="pf-l-grid__item pf-m-11-col">
                        <div class="pf-l-flex pf-m-column">
                          <div class="pf-l-flex__item pf-u-display-inline-flex rhd-c-bonus-content-item">
                            <div class="rhd-c-bonus-content-item__image">
                              <i class="fas fa-code"></i>
                            </div>
                            GitHub code
                          </div>
                          <div class="pf-l-flex__item">
                            This is the description of the bonus content item. It can be long or short, and still fit in the element.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pf-u-display-flex">
                <p class="pf-u-pb-md">Overall, how satisfied are you with this article?</p>
              </div>
              <div class="rhd-c-submit-feedback">
                <a class="pf-c-label pf-m-outline pf-m-green pf-u-mr-md">
                  <span class="pf-c-label__content">
                    <span class="pf-c-label__icon">
                      <i class="fas fa-fw fa-laugh" aria-hidden="true"></i>
                    </span>
                    Very satisfied
                  </span>
                </a>
                <a class="pf-c-label pf-m-outline pf-m-blue pf-u-mr-md">
                  <span class="pf-c-label__content">
                    <span class="pf-c-label__icon">
                      <i class="fas fa-fw fa-smile" aria-hidden="true"></i>
                    </span>
                    Somewhat satisfied
                  </span>
                </a>
                <a class="pf-c-label pf-m-outline pf-m-grey pf-u-mr-md">
                  <span class="pf-c-label__content">
                    <span class="pf-c-label__icon">
                      <i class="fas fa-fw fa-meh" aria-hidden="true"></i>
                    </span>
                    Neutral
                  </span>
                </a>
                <a class="pf-c-label pf-m-outline pf-m-orange pf-u-mr-md">
                  <span class="pf-c-label__content">
                    <span class="pf-c-label__icon">
                      <i class="fas fa-fw fa-frown" aria-hidden="true"></i>
                    </span>
                    Somewhat dissatisfied
                  </span>
                </a>
                <a class="pf-c-label pf-m-outline pf-m-red pf-u-mr-md">
                  <span class="pf-c-label__content">
                    <span class="pf-c-label__icon">
                      <i class="fas fa-fw fa-angry" aria-hidden="true"></i>
                    </span>
                    Very dissatisfied
                  </span>
                </a>
              </div>
              <div class="rhd-c-submit-feedback__input">
                <div class="pf-c-input-group pf-u-mt-sm pf-u-mb-md">
                  <span class="pf-c-input-group__text" aria-label="@" id="username">
                    <i class="far fa-comment" aria-hidden="true"></i>
                  </span>
                  <textarea class="pf-c-form-control" name="additionalFeedbackTextarea" id="additionalFeedbackTextarea" aria-label="Additional feedback text area" placeholder="Additional feedback (optional)"></textarea>
                </div>
                <button class="pf-c-button pf-m-primary pf-m-disabled">Submit feedback!</button>
              </div>
              <div class="rhd-c-series-list">
                <h3>
                  In this series...
                </h3>
                <div class="rhd-c-series-list__count">
                  <i class="fas fa-newspaper"></i>
                  6 articles
                </div>
              </div>
              <nav class="rhd-c-series-items pf-c-nav pf-m-tertiary pf-m-scrollable" aria-label="Local">
                <ul class="pf-c-nav__list">
                  <li class="pf-c-nav__item">
                    <a href="#" class="pf-c-nav__link">Name of article goes here</a>
                  </li>
                  <li class="pf-c-nav__item">
                    <a href="#" class="pf-c-nav__link pf-m-current" aria-current="page">Current article is underlined</a>
                  </li>
                  <li class="pf-c-nav__item">
                    <a href="#" class="pf-c-nav__link">Name of article goes here</a>
                  </li>
                  <li class="pf-c-nav__item">
                    <a href="#" class="pf-c-nav__link">Name of article goes here</a>
                  </li>
                  <li class="pf-c-nav__item">
                    <a href="#" class="pf-c-nav__link">Name of article goes here</a>
                  </li>
                </ul>
                <button class="pf-c-nav__scroll-button" aria-label="Scroll right">
                  View whole series <i class="far fa-arrow-right"></i>
                </button>
              </nav>
            </div>
            <aside class="article-aside pf-l-flex__item">
              <div class="pf-c-card rhd-c-card">
                <div class="rhd-c-card-content rhd-c-card-content--multi-title">
                  <h3 class="rhd-c-card__title">Related content</h3>
                  <h3 class="rhd-c-card__body">
                    <a href="#" class="rhd-m-link">This is the article title</a>
                  </h3>
                  <h3 class="rhd-c-card__body">
                    <a href="#" class="rhd-m-link">This is the article title that is extra long and can go on for as long as it wants to without being cut off</a>
                  </h3>
                  <h3 class="rhd-c-card__body">
                    <a href="#" class="rhd-m-link">This is the article title</a>
                  </h3>
                </div>
              </div>
              <div class="pf-c-card rhd-c-card pf-u-mt-md">
                <div class="rhd-c-card-content">
                  <h3 class="rhd-c-card__body pf-u-pb-sm">
                    <button class="pf-c-button pf-m-link--secondary pf-u-pl-0 pf-u-mb-0 pf-u-text-align-left">View this series <i class="fa fa-arrow-down"></i></button>
                  </h3>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
  </div>
</section>

<script>
  $(document).ready(function () {
    $("#show-article-toc").click(function(){
      // $(".article-toc-button rhd-m-open").removeClass("rhd-m-open");
      // $(".rhddx-c-creation-tips-link__hide").toggleClass("pf-u-display-none");
      $(".article-toc.rhd-m-open").toggleClass("pf-u-hidden");
    });
  });
</script>
