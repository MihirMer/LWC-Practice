import { LightningElement, track } from "lwc";

export default class Demo3DataBinding extends LightningElement {
  greeting = "Welcome to LWC Data Binding";

  firstName = "";
  lastName = "";

  @track
  fullName = {
    firstName: "",
    lastName: ""
  };

  handleChange(event) {
    this.greeting = event.target.value;
    console.log("Updated greeting: " + this.greeting);
  }

  handleNameChange(event) {
    const field = event.target.name;
    if (field === "firstName") {
      this.firstName = event.target.value;
    } else if (field === "lastName") {
      this.lastName = event.target.value;
    }

    // updating entire fullName object - changes are being tracked and reflected in the UI.
    // this.fullName = {
    //   firstName: this.firstName,
    //   lastName: this.lastName
    // };

    // updating individual properties of fullName object - Change are not being tracked.
    // hint: use @track decorator to make it reactive

    this.fullName.firstName = this.firstName;
    this.fullName.lastName = this.lastName;
    console.log("Updated fullName: " + JSON.stringify(this.fullName));
  }
}
