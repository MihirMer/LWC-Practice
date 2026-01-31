import { LightningElement } from "lwc";

export default class Demo5Iteration extends LightningElement {
  // contacts array with id, name and title
  contacts = [
    { id: 1, name: "John", title: "CEO" },
    { id: 2, name: "Jane", title: "CTO" },
    { id: 3, name: "Bob", title: "CFO" }
  ];
}
