import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLogged = false;
  const logUser = false;
  const logout = false;

  return (
    <div>
      <header className="bg-purple-900 text-white py-2 px-4 border-b border-gray-200 flex items-center">
        <div className="flex-1 md:flex-none">
          <Link to="/">
            <h1 className="w-32">Task Manager</h1>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <DesktopNav />
        </nav>
        <div className="flex items-center ml-auto md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            ☰
          </button>
        </div>
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <MobileNav setIsMenuOpen={setIsMenuOpen} />
        </div>
        <div className="flex items-center ml-auto hidden md:flex">
          {!isLogged ? (
            <div className="space-x-4">
              <Link to="/login" className="text-white">
                Sign In
              </Link>
              <Link to="/signup" className="text-white">
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <span className="text-lg font-bold">{logUser}</span>
              <button
                onClick={logout}
                className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-300"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

const DesktopNav = () => {
  const NAV_ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'Add Task', href: '/addtask' }
  ];

  return (
    <>
      {NAV_ITEMS.map((navItem) => (
        <Link
          key={navItem.label}
          to={navItem.href}
          className="text-white hover:text-gray-800"
        >
          {navItem.label}
        </Link>
      ))}
    </>
  );
};

const MobileNav = ({ setIsMenuOpen }) => {
  const NAV_ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'Add Task', href: '/addtask' }
  ];

  return (
    <div className="flex flex-col space-y-2">
      {NAV_ITEMS.map((navItem) => (
        <Link
          key={navItem.label}
          to={navItem.href}
          className="text-white hover:text-gray-800"
          onClick={() => setIsMenuOpen(false)}
        >
          {navItem.label}
        </Link>
      ))}
    </div>
  );
};
