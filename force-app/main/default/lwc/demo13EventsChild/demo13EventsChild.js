import { LightningElement, api } from "lwc";

export default class Demo13EventsChild extends LightningElement {
  @api contactDetails;

  selectHandler() {
    console.log("Selected Contact: " + this.contactDetails.name);
    const selectEvent = new CustomEvent("contactselect", {
      detail: this.contactDetails.id
    });
    this.dispatchEvent(selectEvent);
  }
}
