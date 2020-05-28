// Expand / Collapse Sidenav list items
$(document).ready(function(){
  $('.rhddx-c-sub-menu a').on("click", function() {
    $(this).parent("li").children("ul").slideToggle('active');
    $(this).attr('aria-expanded', 'true');
    $(this).toggleClass("rhddx-m-expanded");
  });

  var form = document.querySelector("form");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var search = form.querySelector("input[type=search]");
    search.value = "site:redhat-developer.github.io/design-manual " + search.value;
    form.submit();
  });
});


var canRunAds = true;
var isBlocked = false;

if( window.canRunAds === undefined ){
  showFallbackImage();
}
if (isBlocked) {
  console.log("Ad blocking detected");
}
