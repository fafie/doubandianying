;
(function(){
  angular.module("douban")
  .service("HttpService",["$window"，"$document",function($window,$document){
    this.json=function(url,queryPbj,callback){
      var callbackName="douban_"+Math.random().toString().substr(2)+(+new Date());
      $window[callbackName]=function(data){
        callback(data);
        document.body.removeChild(script);
      }
      var queryString='';
      for (var parameterName in queryObj) {
        queryString+=parameterName+'='+queryObj[parameterName]+'&';
      }
      var scirpt=document.createElement("script");
      script.src=url+="?"+queryString+"callback"+callbackName;
      document.body.appendChild(script);
    }
  }])
}(angular));
