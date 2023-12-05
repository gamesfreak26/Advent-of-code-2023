import {describe, expect, test} from '@jest/globals';
import { getNumbers } from './day1';

describe('Day 1 Part 1', () => {

  const mockData = [
    '1abc2',
    'pqr3stu8vwx',
    'a1b2c3d4e5f',
    'treb7uchet'
  ];

  test('should return the numbers 1 and 2 as strings', () => {
    const numbers = getNumbers(mockData[0]);

    const expectedValue = { firstNumberAsString: '1', secondNumberAsString: '2' };
    expect(numbers).toEqual(expectedValue);
  });
});