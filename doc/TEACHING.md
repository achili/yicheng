#教学时间

###1.更改端口号
通过在 package.json 中进行配置：
````
"config": {
    "nuxt": {
      "host": "0.0.0.0",
      "port": "8250"
    }
  }
````

###2.代理设置(解决跨域问题)

使用 npm i @nuxtjs/axios @nuxtjs/proxy -D

nuxt.config.js
````
module.exports = {
    build:{
        vendor: ['axios']
    }
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ],
    proxy: [
        ['/app', { target: 'http://xxx.com:8080' }]
    ]
}
````


###3.使用less
````
"css-loader": "^1.0.0",
"less": "^3.8.1",
"less-loader": "^4.1.0",
"vue-style-loader": "^4.1.2"
````


###4.克服nuxt服务端渲染对象继承问题  
####解决思路如下：  
#####a).假渲染  
即假服务端渲染，服务端渲染仅为了seo，到达客户端后客户端自己刷新自己一次  
缺点：无用功，不优雅   
#####b).不使用面向对象化
即数据与方法分离。  
缺点：与初衷背离  
#####c).多重渲染
服务端渲染出来的数据，当要使用对象方法时再次将其对象化  
缺点：浪费资源   
#####d).因材施教
需要seo的页面使用abc任意一种方法  
而对于不需要seo的页面则使用原方法  
缺点：割裂感


###4.使用过滤器  
nuxt.config.js
````
plugins: [
    { src: '~plugins/filter' }
  ]
````
filter
````
import Vue from 'vue'
import * as timeFilters from './time'
import * as strFilters from './str'
import * as validateFilters from './validate'
let filters = {...timeFilters, ...strFilters,...validateFilters};
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});
export default filters;
````



