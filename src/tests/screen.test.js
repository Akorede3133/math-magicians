import { render, screen } from '@testing-library/react';
import Screen from '../components/Screen';
import Calculator from '../pages/Calculator';

describe('Screen', () => {
  test('renders correctly', () => {
    const { screenComp } = render(<Screen />);
    expect(screenComp).toMatchSnapshot();
  });
  test('displays zero', () => {
    render(<Calculator />);
    const calcScreen = screen.getByTestId('screen');
    expect(calcScreen.textContent).toEqual('0');
  });
});
