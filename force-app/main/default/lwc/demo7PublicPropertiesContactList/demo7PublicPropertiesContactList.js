import { LightningElement } from "lwc";

export default class Demo7PublicPropertiesContactList extends LightningElement {
  contacts = [
    { id: 1, name: "John Doe", title: "Manager" },
    { id: 2, name: "Jane Smith", title: "Developer" },
    { id: 3, name: "Bob Johnson", title: "Designer" }
  ];
}
