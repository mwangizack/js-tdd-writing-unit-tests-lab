// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("Returns true for a word that is the same in reverse, and false for a word that is not", () => {
    const word = "racecar";
    const result = isPalindrome(word);
    expect(result).toBe(true);
  });

  it('Returns false for car', () => {
    const word = "car";
    const result = isPalindrome(word);
    expect(result).toBe(false);
  })
});
