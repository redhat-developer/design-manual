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
custom_css: articles
---

<script>
  $(document).ready(function () {
    $(".article-toc-button").click(function () {
      $(".article-toc.rhd-m-open").toggleClass("pf-u-display-none");
    });
    $("#show-article-toc").hover(function(){
      $(".pf-c-tooltip").toggleClass("pf-u-display-none");
    });
  });
</script>

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
            <div class="article-toc rhd-m-open pf-u-display-none">
              <ul class="pf-c-data-list pf-m-compact toc gsi-nav" role="list" aria-label="Article outline" style="padding-top: 6px;">
                <li class="pf-c-data-list__item">
                  <div class="pf-c-data-list__item-row" style="padding-left: 24px;">
                    <div class="pf-c-data-list__item-content">
                      <div class="pf-c-data-list__cell pf-u-display-flex pf-u-align-items-center" style="padding-top: 0;">
                        <span class="article-toc-button rhd-m-open" id="hide-article-toc">
                          <i class="far fa-arrow-left fa-lg" style="color: #06c;"></i>
                        </span>
                        <span class="article-toc-title">Article Outline</span>
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
                      <div class="pf-c-tooltip pf-m-right pf-u-display-none rhd-c-tooltip__articles" role="tooltip">
                        <div class="pf-c-tooltip__arrow"></div>
                        <div class="pf-c-tooltip__content" id="tooltip-right-content">Show article outline</div>
                      </div>
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
