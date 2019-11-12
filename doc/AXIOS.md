#Axios的使用
引用：https://www.cnblogs.com/zhouyangla/p/6753673.html

客户端支持防止 CSRF/XSRF（自动读取cookie中的token并加入到请求头中）。

##1.希望使用vue语法使用(语法糖)

````
import axios from 'axios'
Vue.prototype.$http = axios

////////////////////
$http.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

````

##2.多个并发请求(敲重点)

````
function getUserAccount() {
  return $http.get('/user/12345');
}
function getUserPermissions() {
  return $http.get('/user/12345/permissions');
}
axios.all([getUserAccount(), getUserPermissions()])
  .then($http.spread(function (acct, perms) {
    //两个请求现已完成
  }));
````

##3.拦截器
````
//添加请求拦截器
axios.interceptors.request.use（function（config）{
     //在发送请求之前做某事
     return config;
   }，function（error）{
     //请求错误时做些事
     return Promise.reject（error）;
   }）;
 
//添加响应拦截器
axios.interceptors.response.use（function（response）{
     //对响应数据做些事
      return response;
   }，function（error）{
     //请求错误时做些事
     return Promise.reject（error）;
   }）;
  
````
