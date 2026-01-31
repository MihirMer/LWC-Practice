import { LightningElement } from "lwc";

export default class Demo12LifeCycleDemo extends LightningElement {
  message = "Simple message";

  constructor() {
    super();
    console.log("Constructor called");
  }

  connectedCallback() {
    console.log("Connected Callback called");
  }

  renderedCallback() {
    console.log("Rendered Callback called");
  }

  disconnectedCallback() {
    console.log("Disconnected Callback called");
  }

  errorCallback() {
    console.log("Error Callback called");
  }

  updateMessageHandler() {
    this.message = "Message updated";
  }
}
