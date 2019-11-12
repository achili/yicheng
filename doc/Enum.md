#枚举的定义

参考：https://stijndewitt.com/2014/01/26/enums-in-javascript/  
译文：https://www.jianshu.com/p/76fc5ffa9279

定义：
```javascript
let SizeEnum = {
 SMALL: 1,
 MEDIUM: 2,
 LARGE: 3,
 properties:{
  1:{
    name: "small",
    value: 1,
    code: "S"
  },
  2:{
    name: "medium",
    value: 2,
    code: "M"
  },
  3:{
    name: "large",
    value: 3,
    code: "L"
  }
 }
};
```
使用：
````javascript
var mySize = SizeEnum.MEDIUM;
var myCode = SizeEnum.properties[mySize].code; // myCode == "M"

````


