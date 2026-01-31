import { LightningElement } from "lwc";

export default class Demo10ParentCallingChildMethod extends LightningElement {
  handleRefreshTimestamp() {
    const childComp = this.template.querySelector("c-demo10-child");
    childComp.refreshTimestamp();
  }
}
