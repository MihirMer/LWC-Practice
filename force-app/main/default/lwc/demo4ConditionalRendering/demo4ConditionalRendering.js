import { LightningElement } from "lwc";

export default class Demo4ConditionalRendering extends LightningElement {
  areDetailsVisible = false;

  handleChange(event) {
    this.areDetailsVisible = event.target.checked;
  }
}
