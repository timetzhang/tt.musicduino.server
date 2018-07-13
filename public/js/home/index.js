$(function() {
  layui.use(["layer", "carousel", "flow"], function() {
    var layer = layui.layer;
    var carousel = layui.carousel;
    var flow = layui.flow;

    //建造实例
    carousel.render({
      elem: "#home-carousel",
      width: "100%", //设置容器宽度,
      arrow: "always" //始终显示箭头
    });

    //flow loading
    flow.load({
      elem: '#docs', //指定列表容器
      done: function(page, next){ //到达临界点（默认滚动触发），触发下一页
        var lis = [];
        //以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）
        $.get('/api/list?page='+page, function(res){
          //假设你的列表返回在data集合中
          layui.each(res.data, function(index, item){
            lis.push('<li>'+ item.title +'</li>');
          }); 
          
          //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
          //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
          next(lis.join(''), page < res.pages);    
        });
      }
    });
  });
});
