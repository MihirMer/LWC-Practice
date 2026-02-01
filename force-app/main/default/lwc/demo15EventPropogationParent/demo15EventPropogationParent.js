import { LightningElement } from "lwc";

export default class Demo15EventPropogationParent extends LightningElement {
  selectedContact;

  contacts = [
    { id: 1, name: "John Doe", title: "Manager" },
    { id: 2, name: "Jane Smith", title: "Developer" },
    { id: 3, name: "Bob Johnson", title: "Designer" }
  ];

  handleContactSelect(event) {
    const message = event.detail;
    console.log("Message from child: " + message);
    const contactId = event.target.contactDetails.id;
    this.selectedContact = this.contacts.find(
      (contact) => contact.id === contactId
    );
  }
}
