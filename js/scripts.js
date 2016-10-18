$(function() {
  $(".clickable").click(function () {
    $("#initially-hidden").toggle();
    $("#initially-showing").toggle();
  });
  $(".testable").click(function() {
    $("#testing").slideToggle();
  });
});
