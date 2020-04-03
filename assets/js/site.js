// Expand / Collapse Sidenav list items
$(document).ready(function(){
  $('.rhddx-c-sub-menu a').click(function(){
    $(this).parent("li").children("ul").slideToggle('active');
    $(this).attr('aria-expanded', 'true');
    $(this).toggleClass("rhddx-m-expanded");
  });

  // $(".rhddx-c-nav ul li").on("click", function() {
  //   $(this).find("ul").toggle();
  //   $(this).find(".pf-c-nav__toggle .fal").toggleClass(".fa-minus");
  // });
});

