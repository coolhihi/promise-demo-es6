//例1
var sayyes = function(){
  return new Promise(function(resolve){
    $.getJSON('/testjson.json',function(data){
      resolve(data.word);
    });
  });
}
var sayyes2 = function(w){
  return new Promise(function(resolve, reject){
    $.getJSON('/testjson.json',function(data){
      resolve(w + data.word);
    });
  });
}
var sayyes3 = function(w){
  return new Promise(function(resolve){
    $.getJSON('/testjson.json',function(data){
      resolve(w + data.word);
    });
  });
}

sayyes()
.then((w) => {
  return sayyes2(w);
})
.then((w) => {
  return sayyes2(w);
})
.then((w) => {
  return sayyes3(w);
})
.then((text) => {
  log(text);
})
.catch((e) => {
  //统一进行错误处理
  log(e.message);
});
