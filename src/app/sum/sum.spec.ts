const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  const total = sum(1, 2);
  expect(total).toMatchSnapshot();
});
