const form = document.querySelector("form");
const arrivalInput = document.getElementById("arrival");
const delayInput = document.getElementById("delay");
const output = document.querySelector("output");
function calcNewArrival(arrival, delay) {
    let newTime = (arrival + delay) % 24; // 24 -> 0
    return newTime;
}
export {};
