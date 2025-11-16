import calcNewArrival from "./utils/calcNewArrival.js"
import checkValid from "./utils/checkValid.js"
const form1 = document.getElementById("form1") as HTMLFormElement
const arrivalInput = document.getElementById("arrival") as HTMLInputElement
const delayInput = document.getElementById("delay") as HTMLInputElement
const output = document.getElementById("output") as HTMLOutputElement
const form2 = document.getElementById('form2') as HTMLFormElement
const sequence = document.getElementById('sequence') as HTMLInputElement
const result = document.getElementById('result') as HTMLOutputElement

form1.addEventListener("submit", (event) => {
  event.preventDefault()

  const arrival = parseInt(arrivalInput.value)
  const delay = parseInt(delayInput.value)

  if (isNaN(arrival) || isNaN(delay)) {
    output.value = "Ошибка: введите числа"
    return;
  }

  const newArrival = calcNewArrival(arrival, delay)
  output.value = `Новое время прибытия: ${newArrival}:00`
});

form2.addEventListener('submit', (event) => {
  event.preventDefault()

  const sequenceInput = sequence.value


  if (!/^[\(\)\[\]\{\}]+$/.test(sequenceInput)) {
    result.value = 'ошибка! можно ввести только скобки'
    return
  }

  if (checkValid(sequenceInput)) {
    result.value = 'строка валидна'
  } else {
    result.value = 'строка не валидна :('
  }
})
