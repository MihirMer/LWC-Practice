import { LightningElement, api } from "lwc";

export default class Demo15EventPropogationChild extends LightningElement {
  @api contactDetails;

  selectHandler() {
    console.log("Selected Contact: " + this.contactDetails.name);
    const selectEvent = new CustomEvent("contactselect", {
      detail: "secret message: ",
      bubbles: true
      // why bubbles: true is needed?
      // In LWC, when you dispatch a custom event from a child component, it does not bubble up to parent components by default.
      // By setting bubbles: true, you allow the event to propagate up the DOM tree,
      // enabling parent components to listen for and handle the event.
    });
    this.dispatchEvent(selectEvent);
  }
}
