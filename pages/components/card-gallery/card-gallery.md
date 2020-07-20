---
layout: develop
category: develop
title: Card in a Gallery Layout
active_nav: Components
permalink: /components/card-gallery
section: components
status: released
intro_paragraph: >

---

{% include code-snippets.html %}

<h2>Articles and Blogs
<div class="pf-l-gallery pf-m-gutter component">
  <div class="pf-l-gallery__item">
    <div class="rhd-l-grid__list">
      <div class="pf-c-card rhd-c-card__list">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title">
            <a href="#" class="rhd-m-link">Title of the article that can be two lines</a>&nbsp;
            <span class="rhd-m-list__comment">
              <i class="fas fa-comment"></i> 2
            </span>
          </h3>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title">
            <a href="#" class="rhd-m-link">Title of the article</a>&nbsp;
            <span class="rhd-m-list__comment">
              <i class="fas fa-comment"></i> 2
            </span>
          </h3>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="rhd-l-grid__list">
      <div class="pf-c-card rhd-c-card__list">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Title of the article</a></h3>
          <p class="rhd-c-card__body ">This is the article description that can go to three lines and will be followed by a footer. <span class="rhd-m-list__comment"><i class="fas fa-comment"></i> 2</span></p>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Title of the article</a></h3>
          <p class="rhd-c-card__body ">This is the article description that can go to three lines and will be followed by a footer. <span class="rhd-m-list__comment"><i class="fas fa-comment"></i> 2</span></p>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Title of the article</a></h3>
        <p class="rhd-c-card__body ">This is the article description that can go to three lines and will be followed by a footer. Must truncate after 3 lines.</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            <a href="#" class="rhd-m-link">Author Name</a>
          </div>
          <div class="rhd-c-comment">
            <i class="fas fa-comment"></i> 2
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card__tag">
        <i class="fas fa-newspaper"></i>
        Quickstart
      </div>
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title rhd-m-card-title__no-image"><a href="#" class="rhd-m-link">Title of the article</a></h3>
        <p class="rhd-c-card__body ">This is the article description that can go to three lines and will be followed by a footer. Must truncate after 3 lines.</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            <a href="#" class="rhd-m-link">Author Name</a>
          </div>
          <div class="rhd-c-comment">
            <i class="fas fa-comment"></i> 2
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <img src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=altitude-clouds-cold-417173.jpg&fm=jpg" class="rhd-c-card__image"/>
      <div class="rhd-c-card__tag">
        <i class="fas fa-newspaper"></i>
        Opinion
      </div>
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Title of the article that can go to two lines only and then must truncate after it passes two lines.</a></h3>
        <p class="rhd-c-card__body ">This is the article description that can go to three lines and will be followed by a footer. Must truncate after 3 lines.</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            <a href="#" class="rhd-m-link">Author Name</a>
          </div>
          <div class="rhd-c-comment">
            <i class="fas fa-comment"></i> 2
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<h2>Series</h2>
<div class="pf-l-gallery pf-m-gutter component">
  <div class="pf-l-gallery__item">
    <div class="rhd-l-grid__list">
      <div class="pf-c-card rhd-c-card__list">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title">
            <a href="#" class="rhd-m-link">Title of the series that can be two lines</a>&nbsp;
            <span class="rhd-m-list__comment">
              <i class="fas fa-newspaper"></i> 2
            </span>
          </h3>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title">
            <a href="#" class="rhd-m-link">Title of the series</a>&nbsp;
            <span class="rhd-m-list__comment">
              <i class="fas fa-newspaper"></i> 2
            </span>
          </h3>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="rhd-l-grid__list">
      <div class="pf-c-card rhd-c-card__list">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Series title</a></h3>
          <p class="rhd-c-card__body">
            This is the series description that can go to three lines and will be followed by a footer.&nbsp;
            <span class="rhd-m-list__comment">
              <i class="fas fa-newspaper rhd-m-list__comment"></i> 2
            </span>
          </p>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Series title</a></h3>
          <p class="rhd-c-card__body">
            This is the series description that can go to three lines and will be followed by a footer.&nbsp;
            <span class="rhd-m-list__comment">
              <i class="fas fa-newspaper rhd-m-list__comment"></i> 2
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Series title</a></h3>
        <div class="rhd-c-card__subtitle">3 articles</div>
        <p class="rhd-c-card__body ">This is the series description that can go to three lines and will be followed by a footer. Must truncate after 3 lines.</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            <a href="#" class="rhd-m-link">Author Name</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card__tag">
        <i class="far fa-clone"></i>
        Series
      </div>
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title rhd-m-card-title__no-image"><a href="#" class="rhd-m-link">Series title</a></h3>
        <div class="rhd-c-card__subtitle">3 articles</div>
        <p class="rhd-c-card__body ">This is the series description that can go to three lines and will be followed by a footer. Must truncate after 3 lines.</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            <a href="#" class="rhd-m-link">Author Name</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <img src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?cs=srgb&dl=adventure-calm-clouds-414171.jpg&fm=jpg" class="rhd-c-card__image"/>
      <div class="rhd-c-card__tag">
        <i class="far fa-clone"></i>
        Series
      </div>
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Series title that can go to two lines only and then must truncate after it passes two lines.</a></h3>
        <div class="rhd-c-card__subtitle">3 articles</div>
        <p class="rhd-c-card__body ">This is the series description that can go to three lines and will be followed by a footer. Must truncate after 3 lines.</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            <a href="#" class="rhd-m-link">Author Name</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="pf-l-gallery pf-m-gutter" style="margin-top: 40px;">
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <img src="https://images.pexels.com/photos/462149/pexels-photo-462149.jpeg?cs=srgb&dl=alpine-clouds-daylight-462149.jpg&fm=jpg" class="rhd-c-card__image"/>
      <div class="rhd-c-card__tag">
        <i class="far fa-clone"></i>
        More in this series
      </div>
      <div class="rhd-c-card-content rhd-c-card-content--multi-title">
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            Author Name
          </div>
        </div>
        <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">This is the article title</a></h3>
        <hr>
        <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">This is the article title</a></h3>
        <hr>
        <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">This is the article title</a></h3>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <img src="https://images.pexels.com/photos/714258/pexels-photo-714258.jpeg?cs=srgb&dl=adventure-alpine-alps-714258.jpg&fm=jpg" class="rhd-c-card__image"/>
      <div class="rhd-c-card__tag">
        <i class="far fa-clone"></i>
        More in this series
      </div>
      <div class="rhd-c-card-content rhd-c-card-content--multi-content">
        <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">This is the article title</a></h3>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            Author Name
          </div>
        </div>
        <hr>
      </div>
      <div class="rhd-c-card-content rhd-c-card-content--multi-content">
        <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">This is the article title</a></h3>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            Author Name
          </div>
        </div>
        <hr>
      </div>
      <div class="rhd-c-card-content rhd-c-card-content--multi-content">
        <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">This is the article title</a></h3>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            Author Name
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<h2>Products</h2>
<div class="pf-l-gallery pf-m-gutter component">
  <div class="pf-l-gallery__item">
    <div class="rhd-l-grid__list">
      <div class="pf-c-card rhd-c-card__list">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Red Hat Enterprise Linux</a></h3>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Red Hat Enterprise Linux</a></h3>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Red Hat Enterprise Linux</a></h3>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Red Hat Enterprise Linux</a></h3>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="rhd-l-grid__list">
      <div class="pf-c-card rhd-c-card__list">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Red Hat Enterprise Linux</a></h3>
          <p class="rhd-c-card__body">A stable, proven foundation that’s versatile enough for rolling out new applications, virtualizing environments, and creating a secure hybrid cloud.</p>
          <div class="rhd-c-card__footer">
            <div class="rhd-c-card__footer--cta">
              <a href="#" class="rhd-m-link">Download <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Red Hat Enterprise Linux</a></h3>
          <p class="rhd-c-card__body">A stable, proven foundation that’s versatile enough for rolling out new applications, virtualizing environments, and creating a secure hybrid cloud.</p>
          <div class="rhd-c-card__footer">
            <div class="rhd-c-card__footer--cta">
              <a href="#" class="rhd-m-link">Download <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title">Red Hat Enterprise Linux</h3>
        <p class="rhd-c-card__body">A stable, proven foundation that’s versatile enough for rolling out new applications, virtualizing environments, and creating a secure hybrid cloud.</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--download">
            <a href="#" class="rhd-m-link">Download <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card__tag">
        <i class="fas fa-paper-plane"></i>
        Try it
      </div>
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title rhd-m-card-title__no-image">Red Hat Enterprise Linux</h3>
        <p class="rhd-c-card__body">A stable, proven foundation that’s versatile enough for rolling out new applications, virtualizing environments, and creating a secure hybrid cloud.</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--download">
            <a href="#" class="rhd-m-link">Download <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <img src="https://developers.redhat.com/sites/default/files/styles/teaser/public/externals/fc954fdb2506fde810a74701776127e6.png?itok=y5At3nm0" class="rhd-c-card__image"/>
      <div class="rhd-c-card-content">
        <p class="rhd-c-card__body">A stable, proven foundation that’s versatile enough for rolling out new applications, virtualizing environments, and creating a secure hybrid cloud.</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--download">
            <a href="#" class="rhd-m-link">Download <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<h2 class="rhddx-m-dark">Katacoda Courses</h2>
<div class="pf-l-gallery pf-m-gutter">
  <div class="pf-l-gallery__item">
    <div class="rhd-l-grid__list">
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Istio service mesh workshop</a></h3>
          <div class="rhd-c-card__subtitle">6 lessons | 370 minutes</div>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Istio service mesh workshop</a></h3>
          <div class="rhd-c-card__subtitle">6 lessons | 370 minutes</div>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Istio service mesh workshop</a></h3>
          <div class="rhd-c-card__subtitle">6 lessons | 370 minutes</div>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Istio service mesh workshop</a></h3>
          <div class="rhd-c-card__subtitle">6 lessons | 370 minutes</div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="rhd-l-grid__list">
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Istio service mesh workshop</a></h3>
          <div class="rhd-c-card__subtitle">6 lessons | 370 minutes</div>
          <p class="rhd-c-card__body">Install Istio on a Kubernetes cluster and deploy three microservices.</p>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Istio service mesh workshop</a></h3>
          <div class="rhd-c-card__subtitle">6 lessons | 370 minutes</div>
          <p class="rhd-c-card__body">Install Istio on a Kubernetes cluster and deploy three microservices.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title">
          <a href="#" class="rhd-m-link">Istio service mesh workshop</a>
        </h3>
        <div class="rhd-c-card__subtitle">3 articles</div>
        <p class="rhd-c-card__body ">Install Istio on a Kubernetes cluster and deploy three microservices.</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__subtitle pf-u-p-0">
            370 minutes
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card__tag">
        <i class="fas fa-terminal"></i>
        Istio service mesh workshop
      </div>
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title rhd-m-card-title__no-image">
          <a href="#" class="rhd-m-link">Course title</a>
        </h3>
        <div class="rhd-c-card__subtitle">3 articles</div>
        <p class="rhd-c-card__body ">Install Istio on a Kubernetes cluster and deploy three microservices.</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__subtitle pf-u-p-0">
            370 minutes
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card__tag">
        <i class="fas fa-terminal"></i>
        Istio service mesh workshop
      </div>
      <img src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=altitude-clouds-cold-417173.jpg&fm=jpg" class="rhd-c-card__image"/>
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title">
          <a href="#" class="rhd-m-link">Course title</a>
        </h3>
        <div class="rhd-c-card__subtitle">3 articles</div>
        <p class="rhd-c-card__body ">Install Istio on a Kubernetes cluster and deploy three microservices.</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__subtitle pf-u-p-0">
            370 minutes
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<h2>Katacoda Lessons</h2>
<div class="pf-l-gallery pf-m-gutter component">
  <div class="pf-l-gallery__item">
    <div class="rhd-l-grid__list">
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Getting started with OpenShift</a></h3>
          <div class="rhd-c-card__subtitle">25 minutes | Beginner</div>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Getting started with OpenShift</a></h3>
          <div class="rhd-c-card__subtitle">25 minutes | Beginner</div>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Getting started with OpenShift</a></h3>
          <div class="rhd-c-card__subtitle">25 minutes | Beginner</div>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Getting started with OpenShift</a></h3>
          <div class="rhd-c-card__subtitle">25 minutes | Beginner</div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="rhd-l-grid__list">
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Getting started with OpenShift</a></h3>
          <div class="rhd-c-card__subtitle">25 minutes | Beginner</div>
          <p class="rhd-c-card__body">Use the OpenShift Container Platform to build and deploy applications using both containers and orchestration.</p>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title"><a href="#" class="rhd-m-link">Getting started with OpenShift</a></h3>
          <div class="rhd-c-card__subtitle">6 lessons | 370 minutes</div>
          <p class="rhd-c-card__body">Use the OpenShift Container Platform to build and deploy applications using both containers and orchestration.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title">
          Getting started with OpenShift
        </h3>
        <div class="rhd-c-card__subtitle">25 minutes | Beginner</div>
        <p class="rhd-c-card__body ">Use the OpenShift Container Platform to build and deploy applications using both...</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--download">
            <a href="#" class="rhd-m-link">Start <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card__tag">
        <i class="fas fa-terminal"></i>
        Lesson
      </div>
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title rhd-m-card-title__no-image">
          Getting started with OpenShift
        </h3>
        <div class="rhd-c-card__subtitle">25 minutes | Beginner</div>
        <p class="rhd-c-card__body ">Use the OpenShift Container Platform to build and deploy applications using both...</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--download">
            <a href="#" class="rhd-m-link">Start <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card__tag">
        <i class="fas fa-terminal"></i>
        Lesson
      </div>
      <img src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=altitude-clouds-cold-417173.jpg&fm=jpg" class="rhd-c-card__image"/>
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title">
          Getting started with OpenShift
        </h3>
        <div class="rhd-c-card__subtitle">25 minutes | Beginner</div>
        <p class="rhd-c-card__body ">Use the OpenShift Container Platform to build and deploy applications using both...</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--download">
            <a href="#" class="rhd-m-link">Start <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<h2>eBooks</h2>
<div class="pf-l-gallery pf-m-gutter component">
  <div class="pf-l-gallery__item">
    <div class="rhd-l-grid__list">
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title">
            <a href="#" class="rhd-m-link">
              <i class="fas fa-book"></i>
              Introducing Istio Service
            </a>
          </h3>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title">
            <a href="#" class="rhd-m-link">
              <i class="fas fa-book"></i>
              Introducing Istio Service
            </a>
          </h3>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="rhd-l-grid__list">
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title">
            <a href="#" class="rhd-m-link">
              <i class="fas fa-book"></i>
              Introducing Istio Service
            </a>
          </h3>
          <div class="rhd-c-card__footer">
            <div class="rhd-c-card__footer--author">
              Author Name
            </div>
          </div>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title">
            <a href="#" class="rhd-m-link">
              <i class="fas fa-book"></i>
              Introducing Istio Service
            </a>
          </h3>
          <div class="rhd-c-card__footer">
            <div class="rhd-c-card__footer--author">
              Author Name
            </div>
          </div>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title">
            <a href="#" class="rhd-m-link">
              <i class="fas fa-book"></i>
              Introducing Istio Service
            </a>
          </h3>
          <div class="rhd-c-card__footer">
            <div class="rhd-c-card__footer--author">
              Author Name
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title">
          <i class="fas fa-book"></i>
          Introducing Istio Service
        </h3>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            Author Name & Author Name
          </div>
        </div>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--download">
            <a href="#" class="rhd-m-link">Download <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card__tag">
        <i class="fas fa-book"></i>
        eBook
      </div>
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title rhd-m-card-title__no-image">
          Introducing Istio Service
        </h3>
        <div class="rhd-c-card__footer rhd-m-multi-author">
          <div class="rhd-c-card__footer--author">
            Author Name & Author Name
          </div>
        </div>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--download">
            <a href="#" class="rhd-m-link">Download <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card__tag">
        <i class="fas fa-book"></i>
        eBook
      </div>
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title rhd-m-card-title__no-image">
          eBook title that can go to two lines only and then must truncate after it passes two lines.
        </h3>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            Author Name & Author Name
          </div>
        </div>
        <img src="https://developers.redhat.com/sites/default/files/styles/card_small/public/cover-image/2019-04/istio-service-mesh-microservices.png" class="rhd-c-card__image-body"/>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--cta">
            <a href="#" class="rhd-m-link">Download <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<h2>Videos</h2>
<div class="pf-l-gallery pf-m-gutter component">
  <div class="pf-l-gallery__item">
    <div class="rhd-l-grid__list">
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title">
            <a href="#" class="rhd-m-link">
              <i class="far fa-play-circle"></i>
              Title of the video that can go as many lines as needed, when there is only the Title and Body.
            </a>
          </h3>
          <div class="rhd-c-card__subtitle">2 minutes</div>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title">
            <a href="#" class="rhd-m-link">
              <i class="far fa-play-circle"></i>
              Title of the video that can go as many lines as needed, when there is only the Title and Body.
            </a>
          </h3>
          <div class="rhd-c-card__subtitle">2 minutes</div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="rhd-l-grid__list">
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title">
            <a href="#" class="rhd-m-link">
              <i class="far fa-play-circle"></i>
              Title of the video that can go as many lines as needed, when there is only the Title and Body.
            </a>
          </h3>
          <p class="rhd-c-card__body">This is the video description that can go to three lines, as needed.</p>
          <div class="rhd-c-card__subtitle">2 minutes</div>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title">
            <a href="#" class="rhd-m-link">
              <i class="far fa-play-circle"></i>
              Title of the video that can go as many lines as needed, when there is only the Title and Body.
            </a>
          </h3>
          <p class="rhd-c-card__body">This is the video description that can go to three lines, as needed.</p>
          <div class="rhd-c-card__subtitle">2 minutes</div>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title">
            <a href="#" class="rhd-m-link">
              <i class="far fa-play-circle"></i>
              Title of the video that can go as many lines as needed, when there is only the Title and Body.
            </a>
          </h3>
          <p class="rhd-c-card__body">This is the video description that can go to three lines, as needed.</p>
          <div class="rhd-c-card__subtitle">2 minutes</div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card__video">
        <div class="rhd-c-card__video-time">2:00</div>
        <i class="far fa-play-circle"></i>
        <img src="https://developers.redhat.com/blog/wp-content/uploads/2019/08/2019_Email_Hero_Design_RHEL-copy-2.png">
      </div>
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title">
          <a href="#" class="rhd-m-link">Title of the video that can go to two lines, but will then hide until hovered</a>
        </h3>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card__video">
        <div class="rhd-c-card__video-time">2:00</div>
        <i class="far fa-play-circle"></i>
        <img src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=altitude-clouds-cold-417173.jpg&fm=jpg">
      </div>
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title">
          <a href="#" class="rhd-m-link">Title of the video that can go to two lines, but will then hide until hovered</a>
        </h3>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            Author Name
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card__video">
        <div class="rhd-c-card__video-time">2:00</div>
        <i class="far fa-play-circle"></i>
        <img src="https://developers.redhat.com/blog/wp-content/uploads/2019/08/Quarkus.jpg">
      </div>
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title">
          <a href="#" class="rhd-m-link">Title of the video that can go to two lines, but will then hide until hovered</a>
        </h3>
        <p class="rhd-c-card__body">
          This is the video description that can go to three lines, as needed.
        </p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            Author Name
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<h2>Cheat sheet</h2>
<div class="pf-l-gallery pf-m-gutter component">
  <div class="pf-l-gallery__item">
    <div class="rhd-l-grid__list">
        <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
          <div class="rhd-c-card-content">
            <h3 class="rhd-c-card__title">
              <a href="#" class="rhd-m-link">
                <i class="far fa-file-code"></i>
                Kubernetes Cheat Sheet
              </a>
            </h3>
          </div>
        </div>
    </div>
    <div class="rhd-l-grid__list">
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title">
            <a href="#" class="rhd-m-link">
              <i class="far fa-file-code"></i>
              Kubernetes Cheat Sheet title that can go multiple lines
            </a>
          </h3>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="rhd-l-grid__list">
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title">
            <a href="#" class="rhd-m-link">
              <i class="far fa-file-code"></i>
              Kubernetes Cheat Sheet
            </a>
          </h3>
          <div class="rhd-c-card__footer">
            <div class="rhd-c-card__footer--author">
              Author Name & Author Name
            </div>
          </div>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title">
            <a href="#" class="rhd-m-link">
              <i class="far fa-file-code"></i>
              Kubernetes Cheat Sheet
            </a>
          </h3>
          <div class="rhd-c-card__footer">
            <div class="rhd-c-card__footer--author">
              Author Name & Author Name
            </div>
          </div>
        </div>
      </div>
      <div class="pf-c-card rhd-c-card__list rhd-m-card__courses">
        <div class="rhd-c-card-content">
          <h3 class="rhd-c-card__title">
            <a href="#" class="rhd-m-link">
              <i class="far fa-file-code"></i>
              Kubernetes Cheat Sheet
            </a>
          </h3>
          <div class="rhd-c-card__footer">
            <div class="rhd-c-card__footer--author">
              Author Name & Author Name
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title">
          <i class="far fa-file-code"></i>
          Kubernetes Cheat Sheet
        </h3>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            Author Name & Author Name
          </div>
        </div>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--download">
            <a href="#" class="rhd-m-link">Download <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card__tag">
        <i class="far fa-file-code"></i>
        Cheat sheet
      </div>
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title rhd-m-card-title__no-image">
          Cheat sheet title that can go to two lines only and then must truncate after it passes two lines.
        </h3>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            Author Name & Author Name
          </div>
        </div>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--download">
            <a href="#" class="rhd-m-link">Download <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-l-gallery__item">
    <div class="pf-c-card rhd-c-card">
      <div class="rhd-c-card__tag">
        <i class="far fa-file-code"></i>
        Cheat sheet
      </div>
      <div class="rhd-c-card-content">
        <h3 class="rhd-c-card__title rhd-m-card-title__no-image">
          Cheat sheet title that can go to two lines only and then must truncate after it passes two lines.
        </h3>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            Author Name & Author Name
          </div>
        </div>
        <img src="https://developers.redhat.com/sites/default/files/styles/card_small/public/kubernetes-cheat-sheet-cover.png?itok=io1KFs4d" class="rhd-c-card__image-body"/>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--download">
            <a href="#" class="rhd-m-link">Download <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<h2id="code">Code Snippets</h2>

<h3>Basic Card Example</h3>
<h3>Button Examples</h3>
<div
  class="codepen"
  data-prefill='{
    "tags": ["html", "css", "Red Hat Developer Program", "Red Hat Developer Design Manual"],
    "stylesheets": "https://developers.redhat.com/themes/custom/rhdp2/rhd-frontend/dist/css/rhd.css",
    "scripts": "https://kit.fontawesome.com/79419145d2.js"
  }'
  data-height="400"
  data-theme-id="1"
  data-default-tab="html,result"
  data-editable="true"
>
  <pre data-lang="html">
    {% include_relative card-basic.html %}
  </pre>
  <pre data-lang="css" data-options="scss">
    body {
      padding: 25px;
    }
  </pre>
</div>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<h3>Cheat Sheet Card Example</h3>
<div
  class="codepen"
  data-prefill='{
    "tags": ["html", "css", "Red Hat Developer Program", "Red Hat Developer Design Manual"],
    "stylesheets": "https://developers.redhat.com/themes/custom/rhdp2/rhd-frontend/dist/css/rhd.css",
    "scripts": "https://kit.fontawesome.com/79419145d2.js",
    "title": "Card Gallery examples"
  }'
  data-height="400"
  data-theme-id="1"
  data-default-tab="html,result"
  data-editable="true"
>
  <pre data-lang="html">
    {% include_relative card-cheat-sheet.html %}
  </pre>
  <pre data-lang="css" data-options="scss">
    body {
      padding: 25px;
    }
  </pre>
</div>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
