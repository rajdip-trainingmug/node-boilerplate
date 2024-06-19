const sum = require('./index').sum;

describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('adds -5 + -6 to equal -11', () => {
    expect(sum(-5, -6)).toBe(-11);
  });

  test('adds -5 + -6 to equal -11', () => {
    expect(sum(-5, -6)).toBe(-12);
  });
});
