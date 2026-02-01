import { LightningElement } from "lwc";

export default class Demo13EventsParent extends LightningElement {
  selectedContact;

  contacts = [
    { id: 1, name: "John Doe", title: "Manager" },
    { id: 2, name: "Jane Smith", title: "Developer" },
    { id: 3, name: "Bob Johnson", title: "Designer" }
  ];

  handleContactSelect(event) {
    const contactId = event.detail;
    this.selectedContact = this.contacts.find(
      (contact) => contact.id === contactId
    );
  }
}
