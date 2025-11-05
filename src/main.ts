
const form = document.querySelector("form") as HTMLFormElement;
const arrivalInput = document.getElementById("arrival") as HTMLInputElement;
const delayInput = document.getElementById("delay") as HTMLInputElement;
const output = document.querySelector("output") as HTMLOutputElement;

function calcNewArrival(arrival: number, delay: number): number {
  let newTime = (arrival + delay) % 24; // 24 -> 0
  return newTime;
}
