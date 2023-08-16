import { render, screen } from '@testing-library/react';
import Error from '../components/Error';

describe('Error', () => {
  test('renders correctly', () => {
    const { error } = render(<Error />);
    expect(error).toMatchSnapshot();
  });
  test('contains correct error message', () => {
    render(<Error />);
    const errorMessage = screen.getByTestId('error');
    screen.debug();
    expect(errorMessage.textContent).toEqual('Failed to fetch quote');
  });
});
