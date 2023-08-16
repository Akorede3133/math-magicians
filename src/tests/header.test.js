import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Header', () => {
  test('renders correctly', () => {
    render(<App />);
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toMatch(/math magicians/i);
  });
});
