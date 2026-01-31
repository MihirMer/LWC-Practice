import { LightningElement, api } from "lwc";

export default class Demo10Child extends LightningElement {
  currentTime = new Date();

  @api
  refreshTimestamp() {
    this.currentTime = new Date();
  }
}
