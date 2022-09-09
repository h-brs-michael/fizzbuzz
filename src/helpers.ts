export function print100() {
  for (let i = 1; i < 101; i++) {
    const numberString = getNumber(i);
    console.log(numberString);
  }
}

export function isFizz(i: number): boolean {
  return i % 3 === 0 || i.toString().indexOf("3") >= 0;
}

export function isBuzz(i: number): boolean {
  return i % 5 === 0 || i.toString().indexOf("5") >= 0;
}

export function getNumber(i: number): string {
  if (isFizz(i) && isBuzz(i)) {
    return "FizzBuzz";
  } else if (isFizz(i)) {
    return "Fizz";
  } else if (isBuzz(i)) {
    return "Buzz";
  }
  return i.toString();
}
