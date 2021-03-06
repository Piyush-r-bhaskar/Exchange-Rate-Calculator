const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");
const swap = document.getElementById("swap");

const calculate = async () => {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  const response = await fetch("https://open.exchangerate-api.com/v6/latest");
  const data = await response.json();

  //CALCULATION====>>>>
    const rate = data.rates[currency_two] / data.rates[currency_one];
  amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
};

// Event Listener
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();
