export function fizzBuzz(num: number): string | number {
    if (!(num % 3 === 0 || num % 5 === 0)) {
      return num;
    } else if (num % 3 === 0 && !(num % 5 === 0)) {
      return "Fizz";
    } else if (num % 5 === 0 && !(num % 3 === 0)) {
      return "Buzz";
    } else {
      return "FizzBuzz";
    }
  }