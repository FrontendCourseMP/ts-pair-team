
import calcNewArrival from "./utils/calcNewArrival.js";
const form = document.querySelector("form") as HTMLFormElement;
const arrivalInput = document.getElementById("arrival") as HTMLInputElement;
const delayInput = document.getElementById("delay") as HTMLInputElement;
const output = document.querySelector("output") as HTMLOutputElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const arrival = parseInt(arrivalInput.value);
  const delay = parseInt(delayInput.value);

  if (isNaN(arrival) || isNaN(delay)) {
    output.value = "Ошибка: введите числа";
    return;
  }

  const newArrival = calcNewArrival(arrival, delay);
  output.value = `Новое время прибытия: ${newArrival}:00`;
});

