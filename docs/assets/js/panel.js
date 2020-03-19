$(document).ready(function () {
  $("#show-creation-tips-action").click(function(){
    $(".show-creation-tips-link").toggleClass("pf-u-display-none");
    $(".hide-creation-tips-link").toggleClass("pf-u-display-none");
    $(".creation-tips").toggleClass("creation-tips-show");
    $(".overview-example-panel").toggleClass("pf-m-9-col-on-lg");
  });
});
