import { open } from 'node:fs/promises';

export const getNumbers = (line: string) => {
  const firstDigitRegex = new RegExp("([A-z]*)(?<first>[0-9])([A-z,0-9]*)");
  const firstDigitFromGroup = firstDigitRegex.exec(line);
  const firstNumberAsString = firstDigitFromGroup?.groups?.first;

  const secondDigitRegex = new RegExp("([A-z,0-9]*)(?<last>[0-9])([A-z]*)");
  const secondDigitFromGroup = secondDigitRegex.exec(line);
  const secondNumberAsString = secondDigitFromGroup?.groups?.last;

  return { firstNumberAsString, secondNumberAsString }
};

export const calculateSum = (
  firstNumberAsString: string | undefined, 
  secondNumberAsString: string | undefined
) => {
  if(firstNumberAsString && secondNumberAsString) {
    const actualNumber = Number(firstNumberAsString + secondNumberAsString);
    return actualNumber;
  }
  return 0;
};

export const part1 = async (filePath: string) => {
  const file = await open('day1/input.txt');

  let sum = 0;

  if (filePath) {
    for await (const line of file.readLines()) {
      const numbers = getNumbers(line);
  
      const result = calculateSum(numbers.firstNumberAsString, numbers.secondNumberAsString);

      sum += result;
    }
    return sum;
  }
}

part1('day1/input.txt');