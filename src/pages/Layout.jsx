import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout = () => (
  <div className=" p-0 ">
    <Header />
    <Outlet />
  </div>
);

export default Layout;
