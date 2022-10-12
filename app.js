const prompt = require("prompt");

prompt.start();

function onErr(err) {
  console.log(err);
  return 1;
}

function basicRate(amount) {
  return amount * 0.2;
}

function higherRate(amount) {
  return amount * 0.4;
}

function additionalRate(amount) {
  return amount * 0.45;
}

function taxAmount(income) {
  let basicRateAmount;
  let higherRateAmount;
  let additionalRateAmount;
  if (income > 12571 && income <= 50270) {
    basicRateAmount = basicRate(income);
  } else if (income > 50271 && income <= 150000) {
    higherRateAmount = higherRate(income);
  } else {
    additionalRateAmount = additionalRate(income);
  }

  return basicRateAmount + higherRateAmount + additionalRateAmount;
}

function main() {
  let income;
  prompt.get(["income"], function (err, result) {
    if (err) {
      return onErr(err);
    }
    income = result.income;
  });
  console.log(income);

  // const taxAmount = taxAmount(result.income);
  // console.log(`This is your taxable amount: ${taxAmount}`);
}

main();
