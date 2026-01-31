import { LightningElement, api } from "lwc";

export default class Demo7PublicPropertiesContactDetails extends LightningElement {
  @api contactDetails;

  // This won't work as object passed from parent to child are immutable/read-only
  // owner of the object is parent component
  // so we cannot change the properties of the object directly in the child component

  handleUpdateContactName() {
    this.contactDetails.name = "Mihir Mer";
    console.log(
      "Updated contactDetails: " + JSON.stringify(this.contactDetails)
    );
  }

  // Correct way to update the object is to create a new object with updated values
  // now the owner of the object will be child component so it can update the values

  // problem with this approach is that the parent component will not be aware of the changes made in the child component and we can't use @api and @track together for a single property.
  // so the parent component will still have the old values

  // solution to this problem is to use custom events to notify the parent component about the changes made in the child component.

  handleUpdateContactTitle() {
    const updatedContactDetails = {
      ...this.contactDetails,
      title: "Senior Developer"
    };

    console.log(
      "Updated contactDetails: " + JSON.stringify(updatedContactDetails)
    );
  }
}
