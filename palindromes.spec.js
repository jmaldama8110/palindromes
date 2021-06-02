const palindromes = require('./palindromes')

describe('palindromes', () => {
  test('works with single words', () => {
    expect(palindromes('A mama, Roma le aviva el amor a papa, y a papa, Roma le aviva el amor a mama.')).toBe(true);
  });
  test('works with punctuation ', () => {
    expect(palindromes('Anita lava la tina!')).toBe(true);
  });
  test('works with upper-case letters ', () => {
    expect(palindromes('Racecar!')).toBe(true);
  });
  test('works with multiple words', () => {
    expect(palindromes('A car, a man, a maraca.')).toBe(true);
  });
  test('works with multiple words', () => {
    expect(palindromes('Was it a car or a cat I saw.')).toBe(true);
  });
  test('doesn\'t just always return true', () => {
    expect(palindromes('ZZZZ car, a man, a maraca.')).toBe(false);
  });
});