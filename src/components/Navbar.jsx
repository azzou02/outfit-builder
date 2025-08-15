import { NavLink } from 'react-router-dom';

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `pb-1 border-b-2 ${isActive ? 'border-black' : 'border-transparent'} hover:border-gray-400 transition-colors`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gray-50 border-b">
      <h1 className="text-3xl font-bold tracking-tighter" style={{ fontFamily: "'Londrina Solid', cursive" }}>
        outfit builder
      </h1>
      <div className="flex items-center space-x-8 text-lg font-semibold">
        <NavItem to="/">builder</NavItem>
        <NavItem to="/inventory">inventory</NavItem>
        <NavItem to="/saved-fits">saved fits</NavItem>
      </div>
    </nav>
  );
}

