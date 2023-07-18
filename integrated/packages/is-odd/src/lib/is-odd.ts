import { isEven } from '@org/is-even';

export function isOdd(x: number): boolean {
  return !isEven(x);
}
