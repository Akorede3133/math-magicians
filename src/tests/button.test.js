import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../components/Button';
import Calculator from '../pages/Calculator';

describe('Button', () => {
  test('renders correctly', () => {
    render(<Calculator />);
    const button = screen.getByRole('button', { name: '1' });
    expect(button.textContent).toEqual('1');
  });
  test('handle click works correctly', () => {
    const handleClick = jest.fn();
    render(<Button handleClick={() => handleClick('1')} name="1" type="number" key="1" />);
    const button = screen.getByRole('button', { name: '1' });
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
