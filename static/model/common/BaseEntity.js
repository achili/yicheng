import Base from "./Base";

export default class BaseEntity extends Base{
  constructor() {
    super();
    this.uuid = null;
    this.createTime = null;
    this.deleted = false;
  }

  render(obj) {
    super.render(obj);
    // this.createTime = this.renderE(this.createTime);
  }

}
