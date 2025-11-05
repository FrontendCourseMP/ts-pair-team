const form = document.querySelector("form");
const arrivalInput = document.getElementById("arrival");
const delayInput = document.getElementById("delay");
const output = document.querySelector("output");
function calcNewArrival(arrival, delay) {
    let newTime = (arrival + delay) % 24;
    return newTime;
}
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
export {};
