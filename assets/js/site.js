// Expand / Collapse Sidenav list items
$(document).ready(function(){
  $(".pf-m-expandable").on("click", function() {
    $(this).toggleClass("pf-m-expanded");
    $(".fal").toggleClass("fa-minus");
    $(".fal").toggleClass("fa-plus");
  });

  // $(".rhddx-c-nav ul li").on("click", function() {
  //   $(this).find("ul").toggle();
  //   $(this).find(".pf-c-nav__toggle .fal").toggleClass(".fa-minus");
  // });
});

