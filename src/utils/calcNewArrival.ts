function calcNewArrival(arrival: number, delay: number): number {
  let newTime = (arrival + delay) % 24;
  return newTime;
}

export default calcNewArrival