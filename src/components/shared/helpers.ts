export function generateId() {
  return Math.random().toString().split('.')[1];
}

export function getCoordPercents(number: number, index: number) {
  return `${(100 / (number + 1)) * (index + 1)}%`;
}