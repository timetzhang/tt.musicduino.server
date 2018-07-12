$(function() {
  layui.use("element", function() {
    var element = layui.element;
  });

  if(browser.versions.mobile){
    $(".menu").addClass(["layui-nav-tree","layui-nav-side"]);
  }

  $('#mobile-menu-button').click(function(){
    $(".menu").toggle();
  });
});
