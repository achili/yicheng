
//将js的时间对象，转换成yyyy-MM-dd HH:mm:ss格式的字符串
export function simpleDateTime(d, fallback = null) {
  if (d instanceof Date) {
    return d.format("yyyy-MM-dd HH:mm:ss")
  } else if (d === null) {
    return fallback;
  } else {
    return "Invalid Date:" + d
  }
}

//将java时间字符串转化成js date
export function str2Date(str) {
  if (!str) {
    return null;
  } else if (str instanceof Date) {
    return str;
  } else if (str.length === 19) {
    //仅转换 yyyy-MM-dd HH:mm:ss 这种格式。时间搓、其他编码、其他格式均不转换
    return new Date(Date.parse(str.replace(/-/g, "/")));
  }
  else {
    return "Invalid Date:" + str;
  }
}

// -----------------------------分割线：自定义时间格式转化---------------------------------------------------------------
//hh:MM
export function dayTime(d) {
  return d.format("hh:mm");
}



// -----------------------------分割线：自定义时间计算---------------------------------------------------------------
//获取当天的零点
export function getDayStart (date) {
  let d = new Date(date);
  return new Date(d.setHours(0, 0, 0, 0));
}


//定义一个转换器
// -----------------------------start---------------------------------------------------------------
/** * 对Date的扩展，将 Date 转化为指定格式的String * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
 可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) * eg: * (new
 Date()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423
 * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
 * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
 * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
 * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
 */
if (!Date.prototype.format) {
  Date.prototype.format = function (fmt) {
    let o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours() % 12 === 0 ? 12 : this.getHours() % 12, //小时
      "H+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
    };
    let week = {
      "1": "一",
      "2": "二",
      "3": "三",
      "4": "四",
      "5": "五",
      "6": "六",
      "0": "日"
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "星期" : "周") : "") + week[this.getDay() + ""]);
    }
    for (let k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
    return fmt;
  };
}

if (!Date.prototype.setISO8601) {
  Date.prototype.setISO8601 = function (string) {
    let regexp = "([0-9]{4})(-([0-9]{2})(-([0-9]{2})" +
      "(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?" +
      "(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?";
    if (string) {
      let d = string.match(new RegExp(regexp));
      let offset = 0;
      let date = new Date(d[1], 0, 1);

      if (d[3]) {
        date.setMonth(d[3] - 1);
      }
      if (d[5]) {
        date.setDate(d[5]);
      }
      if (d[7]) {
        date.setHours(d[7]);
      }
      if (d[8]) {
        date.setMinutes(d[8]);
      }
      if (d[10]) {
        date.setSeconds(d[10]);
      }
      if (d[12]) {
        date.setMilliseconds(Number("0." + d[12]) * 1000);
      }
      if (d[14]) {
        offset = (Number(d[16]) * 60) + Number(d[17]);
        offset *= ((d[15] === '-') ? 1 : -1);
      }
      offset -= date.getTimezoneOffset();
      let time = (Number(date) + (offset * 60 * 1000));
      this.setTime(Number(time));
    }
  };
}
// -----------------------------end---------------------------------------------------------------




