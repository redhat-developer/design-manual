$(document).ready(function(){

  $(".rhddx-c-card.rhddx-m-developer").on("click", function() {
    $(this).addClass("rhddx-m-active");
    $(".rhddx-c-card.rhddx-m-designer").removeClass("rhddx-m-active");
    $(".rhddx-c-card.rhddx-m-creator").removeClass("rhddx-m-active");

    $(".rhddx-c-card-content.rhddx-m-designer").removeClass("rhddx-m-active");
    $(".rhddx-c-card-content.rhddx-m-creator").removeClass("rhddx-m-active");
    $(".rhddx-c-card-content.rhddx-m-developer").removeClass("pf-u-display-none");
    $(".rhddx-c-card-content.rhddx-m-designer").addClass("pf-u-display-none");
    $(".rhddx-c-card-content.rhddx-m-creator").addClass("pf-u-display-none");
    $(".rhddx-c-card-content.rhddx-m-developer").addClass("rhddx-m-active");
  });

  $(".rhddx-c-card.rhddx-m-designer").on("click", function() {
    $(this).addClass("rhddx-m-active");
    $(".rhddx-c-card.rhddx-m-developer").removeClass("rhddx-m-active");
    $(".rhddx-c-card.rhddx-m-creator").removeClass("rhddx-m-active");

    $(".rhddx-c-card-content.rhddx-m-designer").removeClass("pf-u-display-none");
    $(".rhddx-c-card-content.rhddx-m-developer").removeClass("rhddx-m-active");
    $(".rhddx-c-card-content.rhddx-m-creator").removeClass("rhddx-m-active");
    $(".rhddx-c-card-content.rhddx-m-developer").addClass("pf-u-display-none");
    $(".rhddx-c-card-content.rhddx-m-creator").addClass("pf-u-display-none");
    $(".rhddx-c-card-content.rhddx-m-designer").addClass("rhddx-m-active");
  });

  $(".rhddx-c-card.rhddx-m-creator").on("click", function() {
    $(this).addClass("rhddx-m-active");
    $(".rhddx-c-card.rhddx-m-developer").removeClass("rhddx-m-active");
    $(".rhddx-c-card.rhddx-m-designer").removeClass("rhddx-m-active");

    $(".rhddx-c-card-content.rhddx-m-creator").removeClass("pf-u-display-none");
    $(".rhddx-c-card-content.rhddx-m-designer").removeClass("rhddx-m-active");
    $(".rhddx-c-card-content.rhddx-m-developer").removeClass("rhddx-m-active");
    $(".rhddx-c-card-content.rhddx-m-developer").addClass("pf-u-display-none");
    $(".rhddx-c-card-content.rhddx-m-designer").addClass("pf-u-display-none");
    $(".rhddx-c-card-content.rhddx-m-creator").addClass("rhddx-m-active");
  });
});
