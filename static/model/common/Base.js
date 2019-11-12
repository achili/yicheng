import axios from "axios";
import lodash from "lodash";
import {str2Date} from "../../../plugins/filter/time";

export default class Base {
  constructor() {
    this.errorMessage = null;
    this.loading = false;
  }

  render(obj) {
    if (obj) {
      //使用真正意义上的深拷贝后再合并对象
      let temp = lodash.cloneDeep(obj);
      Object.assign(this, temp);
    }
    return this;
  }

  renderList(field, Clazz) {
    let beans = this[field];
    if (!beans || !Clazz) {
      return;
    }
    this[field] = [];
    for (let i = 0; i < beans.length; i++) {
      let bean = beans[i];
      let clazz = new Clazz();
      clazz.render(bean);
      this[field].push(clazz);
    }
  }

  renderEntity(field, Clazz) {
    if (Clazz === Date) {
      this[field] = str2Date(this[field])
    } else if (Clazz.prototype instanceof Base) {
      let bean = (new this.constructor())[field];
      if (!bean) {
        console.error('base.renderEntity:constructor Clazz definition of inconsistency')
      }
      if (this[field] !== null) {
        bean.render(this[field]);
        this[field] = bean
      }
    } else {
      console.error('调用错误！')
    }
  }

  httpPost(url, params, successCallback, errorCallback) {
    if(!url) {
      console.error("base.httpPost:url is null")
    }
    let that = this;
    this.loading = true;
    axios.post(url, params).then(function (response) {
      that.loading = false;
      successCallback&&successCallback(response);
    }, function (response) {
      that.loading = false;
      errorCallback&&errorCallback(response);
    });
  }

}
