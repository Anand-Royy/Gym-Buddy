import { createContext, useState } from 'react';
import Navlinks from './Navlinks';
export const NavbarContext = createContext();
const Navbar = () => {
  const [user, setUser] = useState('Peter');
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className='navbar'>
        <h1 className='text-2xl font-mono'>Gym Buddy</h1>
        <Navlinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
