//例3

//新做法
class Article {
  constructor(a){
    this.id = a.id;
    this.title = a.title;
    this.content = a.content;
    this.categoryid = a.categoryid;
  }

  static findById (articleid) {
    return new Promise((resolve, reject) => {
      $.getJSON('/getArticleById.json',{id: articleid},function(data){
        if(data.Result == 200){
          //成功获取文章对象
          resolve(new Article(data.Data));
        }
        else{
          //错误处理
          reject(new Error('在读取文章信息时发生错误！'));
        }
      });
    });
  }
}

class Category {
  constructor(a){
    this.id = a.id;
    this.title = a.title;
    this.summary = a.summary;
    this.ownerid = a.ownerid;
  }

  static findById (categoryid) {
    return new Promise((resolve, reject) => {
      $.getJSON('/getCategoryById.json',{id: categoryid},function(data){
        if(data.Result == 200){
          //成功获取栏目对象
          resolve(new Category(data.Data));
        }
        else{
          //错误处理
          reject(new Error('在读取栏目信息时发生错误！'));
        }
      });
    });
  }
}

Article.findById(10001)
.then((article) => {
  return Category.findById(article.categoryid);
})
.then((category) => {
  log('简介：'+category.summary);
  log('栏目拥有者ID：'+category.ownerid);
  log('下面再根据拥有者ID去接口找栏目拥有者的信息');
})
.catch((e) => {
  log(e.message);
});
