//例4

//Promise.all

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

Promise.all([
  Article.findById(10001),
  Category.findById(3)
]).then(([article, category]) => {
  log('文章标题：'+article.title);
  log('文章内容：'+article.content);
  log('栏目简介：'+category.summary);
  log('栏目拥有者ID：'+category.ownerid);
})
.catch((e) => {
  log(e.message);
});