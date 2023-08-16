import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from 'react-router-dom';
import Calculator from './pages/Calculator';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Error from './components/Error';
import Quotes, { loader } from './pages/Quotes';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="calculator" element={<Calculator />} />
    <Route path="quote" element={<Quotes />} loader={loader} errorElement={<Error />} />
  </Route>,
));
const App = () => (
  <div className="w-full min-h-screen">
    <RouterProvider router={router} />
  </div>
);

export default App;
