const getTermOptions = () => {
  return [
    { label: "15 Years", value: "15" },
    { label: "20 Years", value: "20" },
    { label: "30 Years", value: "30" }
  ];
};

const calulateMonthlyPayment = (principal, annualInterestRate, termYears) => {
  const monthlyInterestRate = annualInterestRate / 100 / 12;
  const numberOfPayments = termYears * 12;

  if (monthlyInterestRate === 0) {
    return principal / numberOfPayments;
  }

  const monthlyPayment =
    (principal * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

  return monthlyPayment;
};

export { getTermOptions, calulateMonthlyPayment };
