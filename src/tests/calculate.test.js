import calculate from '../logic/calculate';

describe('calculate', () => {
  test('when AC buttons is pressed', () => {
    const val = calculate({}, 'AC');
    expect(val).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('when the zero button is pressed without an operation calculate', () => {
    const val = calculate({ next: '0', operation: null }, '0');
    expect(val).toEqual({});
  });
  test('when operation exists and buttonName is not zero calculate', () => {
    const val = calculate({ operation: '+' }, '55');
    expect(val).toEqual({ operation: '+', next: '55' });
  });
  test('when operation exists and buttonName is zero', () => {
    const val = calculate({ operation: '+' }, '0');
    expect(val).toEqual({ operation: '+', next: '0' });
  });
  test('If there is no operation and buttonName is not zero, update next and clear the value', () => {
    const val = calculate({ operation: null }, '22');
    expect(val).toEqual({ next: '22', total: null });
  });
  test('If there is no operation and buttonName is zero, update next and clear the value', () => {
    const val = calculate({ operation: null }, '0');
    expect(val).toEqual({ next: '0', total: null });
  });
  test('If buttonName is dot(period) and a decimal next value exists', () => {
    const val = calculate({ next: '2.6' }, '.');
    expect(val).toEqual({ ...val });
  });
  test('If buttonName is dot(period) and not a decimal next value  exists', () => {
    const val = calculate({ next: '2' }, '.');
    expect(val).toEqual({ ...val, next: '2.' });
  });
  test('If operation exists and buttonName is dot(period)', () => {
    const val = calculate({ operation: '+' }, '.');
    expect(val).toEqual({ ...val, next: '0.' });
  });
  test('If a decimal total exists and buttonName is dot(period)', () => {
    const val = calculate({ total: '6.2' }, '.');
    expect(val).toEqual({});
  });
  test('If not a decimal total exists and buttonName is dot(period)', () => {
    const val = calculate({ total: '6' }, '.');
    expect(val).toEqual({ ...val, next: '6.' });
  });
  test('If  total does not exists and buttonName is dot(period)', () => {
    const val = calculate({ total: null }, '.');
    expect(val).toEqual({ ...val, next: '0.' });
  });
  test('If operation and next exist and buttonName is =( equal to)', () => {
    const val = calculate({ total: '5', next: '20', operation: '+' }, '=');
    expect(val).toEqual({ total: '25', next: null, operation: null });
  });
  test('If operation and next does not exist and buttonName is =( equal to)', () => {
    const val = calculate({ total: '5', next: null, operation: null }, '=');
    expect(val).toEqual({});
  });
  test('If next exists and buttonName is +/-', () => {
    const val = calculate({ next: 8 }, '+/-');
    expect(val).toEqual({ next: '-8', ...val });
  });
  test('If next exists and buttonName is +/-', () => {
    const val = calculate({ next: '-8' }, '+/-');
    expect(val).toEqual({ next: '8', ...val });
  });
  test('If total exists and buttonName is +/-', () => {
    const val = calculate({ total: '40', next: null, operation: null }, '+/-');
    expect(val).toEqual({ total: '-40', ...val });
  });
  test('If total, next and operation does not exists and buttonName is +/-', () => {
    const val = calculate({ total: null, next: null, operation: null }, '+/-');
    expect(val).toEqual({});
  });
  test('If total, next and operation does not exists and buttonName is +/-', () => {
    const val = calculate({ total: '10', next: null, operation: null }, '+');
    expect(val).toEqual({ ...val, operation: '+' });
  });
  test('If total exists, and next and operation does not exists and buttonName is +/-', () => {
    const val = calculate({ total: '10', next: null, operation: null }, '+');
    expect(val).toEqual({ ...val, operation: '+' });
  });
  test('If user pressed an operation button and there is an existing operation while total exist and next does not exist', () => {
    const val = calculate({ total: '10', next: null, operation: null }, '+');
    expect(val).toEqual({ ...val, operation: '+' });
  });
  test('If user pressed an operation button and there is an existing operation while total  and next do not exist', () => {
    const val = calculate({ operation: '+' }, '-');
    expect(val).toEqual({ total: 0, operation: '-' });
  });
  test('If user pressed an operation button and while total  and next exist', () => {
    const val = calculate({ total: '5', next: '8', operation: '+' }, '+');
    expect(val).toEqual({ total: '13', next: null, operation: '+' });
  });
  test('If next does not exist and the user typed an operation', () => {
    const val = calculate({ next: null }, '+');
    expect(val).toEqual({ operation: '+' });
  });
  test('If next exist and the user typed an operation', () => {
    const val = calculate({ next: '5' }, '+');
    expect(val).toEqual({ total: '5', next: null, operation: '+' });
  });
});
