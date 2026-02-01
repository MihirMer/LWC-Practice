import { LightningElement } from "lwc";

export default class Demo14ListenEventProgramaticallyParent extends LightningElement {
  selectedContact;

  constructor() {
    super(); // always call super() first in the constructor

    // regular function way
    this.template.addEventListener(
      "contactselect",
      this.handleContactSelect.bind(this)
    );

    // arrow function way
    // this.template.addEventListener(
    //   "contactselect",
    //   event => this.handleContactSelect(event)
    // );

    // annonyous function way
    // this.template.addEventListener("contactselect", (event) => {
    //   const contactId = event.detail;
    //   this.selectedContact = this.contacts.find(
    //     (contact) => contact.id === contactId
    //   );
    // });
  }

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
