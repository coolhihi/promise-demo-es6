//例2

//旧做法
var articleid = 10001;
$.getJSON('/getArticleById.json',{id:articleid},function(data){
  if(data.Result == 200){
    //成功获取文章对象，去取栏目信息
    var article = data.Data;
    $.getJSON('/getCategoryById.json',{id: article.categoryid},function(data){
      if(data.Result == 200){
        //成功获取栏目对象
        var category = data.Data;
        log('简介：'+category.summary);
        log('栏目拥有者ID：'+category.ownerid);
        log('下面再根据拥有者ID去接口找栏目拥有者的信息');
      }
      else{
        //错误处理
        log('在读取栏目信息时发生错误！');
      }
    });
  }
  else{
    //错误处理
    log('在读取文章信息时发生错误！');
  }
});
