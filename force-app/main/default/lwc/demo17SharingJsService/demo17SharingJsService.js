import { LightningElement } from "lwc";
import {
  getTermOptions,
  calulateMonthlyPayment
} from "c/demo17MortgageService";

export default class Demo17SharingJsService extends LightningElement {
  termOptions = getTermOptions();
  principal = 300000;
  term = "30";
  rate = 4.5;
  monthlyPayment = 0;

  handleCalculatePayment() {
    this.monthlyPayment = calulateMonthlyPayment(
      this.principal,
      this.rate,
      this.term
    );
  }

  handlePrincipalChange(event) {
    this.principal = event.target.value;
  }

  handleTermChange(event) {
    this.term = event.target.value;
  }

  handleRateChange(event) {
    this.rate = event.target.value;
  }
}
