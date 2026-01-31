import { LightningElement, api } from "lwc";

export default class Demo9GetterSetterPropChild extends LightningElement {
  firstName = "";
  lastName = "";
  fullName = "";

  handleNameChange(event) {
    const nameType = event.target.name;
    if (nameType === "firstName") {
      this.firstName = event.target.value;
    } else if (nameType === "lastName") {
      this.lastName = event.target.value;
    }

    this.fullName = `${this.firstName} ${this.lastName}`;
  }

  @api
  get fullNameUpperCase() {
    return this.fullName.toUpperCase();
  }

  set fullNameUpperCase(value) {
    this.fullName = value;
  }
}
