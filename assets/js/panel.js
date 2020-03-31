$(document).ready(function () {
  $("#show-creation-tips-action").click(function(){
    $(".rhddx-c-creation-tips-link__show").toggleClass("pf-u-display-none");
    $(".rhddx-c-creation-tips-link__hide").toggleClass("pf-u-display-none");
    $(".rhddx-c-creation-tips").toggleClass("rhddx-m-show");
    $(".rhddx-c-overview-example-panel").toggleClass("pf-m-9-col-on-lg");
  });
});
$(document).ready(function(){

  // Variables
  var clickedTab = $(".tabs > .active");
  var tabWrapper = $(".tab__content");
  var activeTab = tabWrapper.find(".active");
  var activeTabHeight = activeTab.outerHeight();

  // Show tab on page load
  activeTab.show();
  // Set height of wrapper on page load
  tabWrapper.height(activeTabHeight);

  $(".tabs > li").on("click", function() {
    // Remove class from active tab
    $(".tabs > li").removeClass("active");
    // Add class active to clicked tab
    $(this).addClass("active");
    // Update clickedTab variable
    clickedTab = $(".tabs .active");
    // fade out active tab
    activeTab.fadeOut(250, function() {
      // Remove active class all tabs
      $(".tab__content > li").removeClass("active");
      // Get index of clicked tab
      var clickedTabIndex = clickedTab.index();
      // Add class active to corresponding tab
      $(".tab__content > li").eq(clickedTabIndex).addClass("active");
      // update new active tab
      activeTab = $(".tab__content > .active");
      // Update variable
      activeTabHeight = activeTab.outerHeight();
      // Animate height of wrapper to new tab height
      tabWrapper.stop().delay(50).animate({
        height: activeTabHeight
      }, 500, function() {
        // Fade in active tab
        activeTab.delay(50).fadeIn(250);
      });
    });
  });
});
