---
layout: pages
category: create
section: Content Types
permalink: /create/articles
title: Articles
active_nav: Content_types
intro_paragraph: >

custom_js: panel
custom_css: tabs
compose_image: wordpress-articles.png
---

<section class="pf-c-content">
    <div role="article" about="http://developers.redhat.com/coderland/serverless/serverless-knative-intro/"
        class="component rhd-c-article author-left" level="Beginner" id="rhd-article">
        <div class="pf-l-grid pf-m-gutter">
            <div class="article-info-wrapper pf-l-grid__item pf-lg-7-col pf-m-12-col-on-sm pf-m-7-col-on-lg">
                <div class="article-info-left">
                    <p class="article-type">
                        Article
                    </p>
                    <h1 id="developer-materials">
                        <span class="field field--name-title field--type-string field--label-hidden">Part 1:
                            Introduction to
                            Serverless with Knative</span>
                    </h1>
                    <div class="meta-info">
                        <div class="publish-date"> February 19, 2019</div>
                        <div class="share-buttons">
                            <div class="a2a_kit a2a_default_style">
                                <a class="a2a_button_twitter" aria-label="Share on twitter">
                                    <i class="fab fa-twitter-square" title="Share on twitter"></i>
                                </a>
                                <a class="a2a_button_facebook" aria-label="Share on facebook">
                                    <i class="fab fa-facebook-square" title="Share on facebook"></i>
                                </a>
                                <a class="a2a_button_linkedin" aria-label="Share on linkedin">
                                    <i class="fab fa-linkedin" title="Share on linkedin"></i>
                                </a>
                                <a class="a2a_button_email" aria-label="Share with email">
                                    <i class="fas fa-envelope-square" title="Share with email"></i>
                                </a>
                            </div>
                        </div>
                        <div class="topics">
                            <span class="tag-label">
                                <i class="fas fa-tag fa-sm" title="Tags:"></i>
                            </span>
                            <a href="http://developers.redhat.com/topics/containers/">Containers</a>
                            <a href="http://developers.redhat.com/topics/kubernetes/">Kubernetes</a>
                            <a href="http://developers.redhat.com/topics/serverless-architecture/">Serverless</a>
                        </div>
                    </div>
                </div>
                <div class="authors">
                    <div role="article" about="/authors/doug-tidwell/" class="rhd-c-author--tile">
                        <span class="rhd-c-author--tile-hero">
                            <img src="http://developers.redhat.com/sites/default/files/styles/square_small/public/Doug%20-%20London%20Eye.jpg?itok=__iYGeP-"
                                width="200" height="200" alt="Doug Tidwell" typeof="foaf:Image"
                                class="image-style-square-small" />
                        </span>
                        <div class="rhd-c-author--tile-info">
                            <div class="rhd-c-author--tile-name">
                                <a href="http://developers.redhat.com/authors/doug-tidwell/">
                                    <span class="field field--name-title field--type-string field--label-hidden">Doug
                                        Tidwell</span>
                                </a>
                            </div>
                            <div class="rhd-c-author--tile-title field__item">
                                Red Hat Developer Alumnus
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="floated-image pf-l-grid__item pf-lg-5-col pf-m-12-col-on-sm pf-m-5-col-on-lg">
                <img src="https://images.pexels.com/photos/544067/pexels-photo-544067.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=600"
                    width="600" height="315" alt="Serverless computing in action" typeof="foaf:Image"
                    class="image-style-article-floated" />
            </div>
            <div class="pf-l-grid__item">
                <div class="pf-l-flex pf-m-align-items-flex-start">
                    <div class="article-toc pf-l-flex__item">
                        <ul class="toc gsi-nav">
                            <li><a href="#the_compile_driver">The Compile Driver</a></li>
                            <li><a href="#your_assignment">Your assignment</a></li>
                            <li><a href="#a_brief_word_about_serverless">A brief word about serverless</a></li>
                            <li><a href="#getting_from_here_to_there">Getting from here to there</a></li>
                            <li><a href="#what_s_next">What's next</a></li>
                        </ul>
                    </div>
                    <div class="article-content pf-l-flex__item pf-m-align-self-flex-start gsi fetch-toc">
                        <div class="no-padding-top no-padding-bottom assembly assembly-type-rich_text component rich-text pf-c-content"
                            id="assembly-field-content-11395">
                            <div class="pf-l-grid pf-m-gutter">
                                <div class="pf-l-grid__item">
                                    <div class="rich-text-content">
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
                                        <div
                                            class="pf-l-grid__item pf-m-1-col pf-u-display-flex pf-u-align-items-center rhd-c-avatar--container">
                                            <img class="pf-c-avatar rhd-c-avatar"
                                                src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                                                alt="Content image">
                                        </div>
                                        <div class="pf-l-grid__item pf-m-11-col">
                                            <div class="pf-l-flex pf-m-column">
                                                <div
                                                    class="pf-l-flex__item pf-u-display-inline-flex rhd-c-bonus-content-item">
                                                    <div class="rhd-c-bonus-content-item__image">
                                                        <i class="fas fa-code"></i>
                                                    </div>
                                                    GitHub code
                                                </div>
                                                <div class="pf-l-flex__item">
                                                    This is the description of the bonus content item. It can be long or
                                                    short, and still fit in the element.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="disqus-thread-wrapper" id="comments">
                            <div id="disqus_thread"></div>
                        </div>
                    </div>
                    <aside class="article-aside pf-l-flex__item">
                        <div class="pf-c-card rhd-c-card"> <img
                                src="https://images.pexels.com/photos/544067/pexels-photo-544067.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                class="rhd-c-card__image">
                            <div class="rhd-c-card__tag"> <i class="far fa-clone" aria-hidden="true"></i> More in this
                                series</div>
                            <div class="rhd-c-card-content rhd-c-card-content--multi-title">
                                <div class="rhd-c-card__footer">
                                    <div class="rhd-c-card__footer--author"> Author Name</div>
                                </div>
                                <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">This is the article
                                        title</a></h3>
                                <hr>
                                <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">This is the article title
                                        that is extra long and can go on for as long as it wants to without being cut
                                        off</a></h3>
                                <hr>
                                <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">This is the article
                                        title</a></h3>
                                <hr>
                            </div>
                            <div class="rhd-c-card-content rhd-c-card-content--multi-content">
                                <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">This is the article
                                        title</a></h3>
                                <div class="rhd-c-card__footer">
                                    <div class="rhd-c-card__footer--author"> Author Name</div>
                                </div>
                                <hr>
                            </div>
                            <div class="rhd-c-card-content rhd-c-card-content--multi-content">
                                <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">This is the article
                                        title</a></h3>
                                <div class="rhd-c-card__footer">
                                    <div class="rhd-c-card__footer--author"> Author Name</div>
                                </div>
                            </div>
                        </div>
                        <div class="rhd-c-article__form-subscribe">
                            <div class="rhd-c-card-content">
                                <div class="rhd-c-cta-form">
                                    <div class="cta-content">
                                        <h3 class="pf-c-title"> Loving this article? Want more?</h3>
                                        <p>Subscribe to updates from Red Hat Developers and be the first to hear about
                                            new resources and developments.</p>
                                    </div>
                                    <div class="cta-form">
                                        <form novalidate="" class="pf-c-form">
                                            <div class="pf-c-form__group"> <input class="pf-c-form-control" type="text"
                                                    id="optional_item_one" name="optional_item_one"
                                                    placeholder="First name"></div>
                                            <div class="pf-c-form__group"> <input class="pf-c-form-control" type="text"
                                                    id="optional_item_one" name="optional_item_one"
                                                    placeholder="Last name"></div>
                                            <div class="pf-c-form__group"> <input class="pf-c-form-control" type="email"
                                                    id="optional_item_one" name="optional_item_one" placeholder="Email">
                                            </div>
                                            <div class="pf-c-form__group pf-m-action">
                                                <div class="pf-c-form__actions"> <button class="pf-c-button pf-m-heavy"
                                                        type="submit"> Subscribe </button></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
                <div>
                    <div class="related-articles rhd-c-card-grid">
                        <div class="pf-l-flex">
                            <h4 class="related-article-header">Related Articles</h4>
                        </div>
                        <div
                            class="pf-l-flex rhd-c-card-grid__wrapper field field--name-field-related-articles field--type-entity-reference field--label-hidden field__items">
                            <div role="article"
                                about="http://developers.redhat.com/coderland/serverless/building-a-serverless-service/"
                                level="Unclassified" class="pf-c-card rhd-c-card">
                                <div class="rhd-c-card__tag">
                                    <i class="fas fa-newspaper"></i>
                                    Article
                                </div>
                                <div class="rhd-c-card-content">
                                    <h3 class="rhd-c-card__title rhd-m-card-title__no-image">
                                        <a href="http://developers.redhat.com/coderland/serverless/building-a-serverless-service/"
                                            class="rhd-m-link">Part
                                            2: Building a Serverless Service</a>
                                    </h3>
                                    <p class="rhd-c-card__body ">
                                        Take a look at the image manipulation code behind the photo booth, then look at
                                        a
                                        modern web app that uses it.
                                    </p>
                                    <div class="rhd-c-card__footer">
                                        <div class="rhd-c-card__footer--author">
                                            <a href="http://developers.redhat.com/authors/doug-tidwell/"
                                                class="rhd-m-link">Doug Tidwell</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="article" about="/coderland/serverless/deploying-serverless-knative/"
                                level="Intermediate" class="pf-c-card rhd-c-card">
                                <div class="rhd-c-card__tag">
                                    <i class="fas fa-newspaper"></i>
                                    Article
                                </div>
                                <div class="rhd-c-card-content">
                                    <h3 class="rhd-c-card__title rhd-m-card-title__no-image">
                                        <a href="http://developers.redhat.com/coderland/serverless/deploying-serverless-knative/"
                                            class="rhd-m-link">Part
                                            3: Deploying a Serverless Service to Knative</a>
                                    </h3>
                                    <p class="rhd-c-card__body ">
                                        Install Knative and Istio, deploy your code, and invoke it from a React
                                        application.
                                    </p>
                                    <div class="rhd-c-card__footer">
                                        <div class="rhd-c-card__footer--author">
                                            <a href="http://developers.redhat.com/authors/doug-tidwell/"
                                                class="rhd-m-link">Doug Tidwell</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#top" id="scroll-to-top">
                <i class="fas fa-arrow-circle-up"></i>
            </a>
        </div>
    </div>
</section>
