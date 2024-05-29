import { sum } from "../sum";

test("Calculation of sum of numbers", () => {
  const result = sum(3, 3);

  //Assertion
  expect(result).toBe(6);
});
