import operate from '../logic/operate';

describe('operate', () => {
  test('if operation is plus', () => {
    const value = operate(1, 2, '+');
    expect(value).toEqual('3');
  });
  test('if operation is minus', () => {
    const value = operate(1, 5, '-');
    expect(value).toEqual('-4');
  });
  test('if operation is multiplication', () => {
    const value = operate(4, 2, 'x');
    expect(value).toEqual('8');
  });
  test('if operation is division', () => {
    const value = operate(8, 2, '÷');
    expect(value).toEqual('4');
  });
  test('if operation is division and divisor is zero', () => {
    const value = operate(8, 0, '÷');
    expect(value).toEqual("Can't divide by 0.");
  });
  test('if operation is modulus', () => {
    const value = operate(8, 2, '%');
    expect(value).toEqual('0');
  });
  test('if operation is modulus and divisor is zero', () => {
    const value = operate(8, 0, '%');
    expect(value).toEqual("Can't find modulo as can't divide by 0.");
  });
});
