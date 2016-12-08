;
(function(angular){
  angular.module("douban.movieList")
  .filter("getNames",[function(){
    return function(directors,split){
      if(!directors || Object.prototype.toString.call(directors)!==[object Array]){
        console.warn("director ");
        return;
      }
      var str='';
      directros.forEach(function(director,index){
        str+=director.name+(index===directors.length-1?'':split);
      })
      return str;
    }
  }])
}(angular));
