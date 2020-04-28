// Expand / Collapse Sidenav list items
$(document).ready(function(){
  var $subMenu = $('.rhddx-c-sub-menu a');
  var $thing = $('a.rhddx-c-entry');

  // if ($thing.children('ul li a').hasClass('rhddx-m-active') === true) {
  //   $('.rhddx-c-sub-menu a').parent('li').children('ul').slideToggle();
  //   $('a.rhddx-c-sub-menu--item').addClass("rhddx-m-expanded");
  // }

  // if (($thing).hasClass('rhddx-m-active')) {
  //   $subMenu.parent("li").children("ul").slideToggle();
  //   $('a.rhddx-c-sub-menu--item').toggleClass("rhddx-m-expanded");
  // }

  $subMenu.click(function(){
    $(this).parent("li").children("ul").slideToggle();
    $(this).attr('aria-expanded', 'true');
    $(this).toggleClass("rhddx-m-expanded");
  });
});
