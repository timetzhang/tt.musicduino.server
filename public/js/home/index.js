$(function() {
  layui.use(["layer", "carousel"], function() {
    var layer = layui.layer;
    var carousel = layui.carousel;

    //建造实例
    carousel.render({
      elem: "#home-carousel",
      width: "100%", //设置容器宽度,
      arrow: "always" //始终显示箭头
    });
  });
});
