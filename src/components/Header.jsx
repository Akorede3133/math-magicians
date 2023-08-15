import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeLink = {
    textDecoration: 'underline',
    color: 'blue',
  };
  return (
    <header className=" flex justify-between items-center p-4 bg-blue-500">
      <NavLink to="/">
        <h1 className=" text-4xl text-white">
          Math Magicians
        </h1>
      </NavLink>
      <nav>
        <ul className=" flex gap-2">
          <li>
            <NavLink
              to="/"
              className=" text-white text-sm"
              style={({ isActive }) => (isActive ? activeLink : null)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="calculator"
              className=" text-white text-sm"
              style={({ isActive }) => (isActive ? activeLink : null)}
            >
              Calculator
            </NavLink>
          </li>

          <li>
            <NavLink
              to="quote"
              className=" text-white text-sm"
              style={({ isActive }) => (isActive ? activeLink : null)}
            >
              Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
