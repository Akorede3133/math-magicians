import { render } from '@testing-library/react';
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from 'react-router-dom';
import Quotes from '../pages/Quotes';
import Error from '../components/Error';

jest.mock('../api');
describe('Quotes Component', () => {
  test('renders quote and author', async () => {
    const mockFetchQuotes = jest.fn(() => Promise.resolve(
      { quote: 'We can do this', author: 'Akorede' },
    ));

    const router = createBrowserRouter(createRoutesFromElements(
      <Route path="quote" element={<Quotes />} loader={mockFetchQuotes} errorElement={<Error />} />,
    ));

    const { container } = render(
      <RouterProvider router={router} />,
    );
    expect(container).toMatchSnapshot();
  });
});
