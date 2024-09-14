import { useContext } from 'react';
import { NavbarContext } from './Navbar';
import { Button } from '@/components/ui/button';

const User = () => {
  const { user, logout } = useContext(NavbarContext);
  return (
    <div className='nav-user'>
      {user ? (
        <>
          <h3>Hello there, {user}</h3>
          <Button onClick={logout}>logout</Button>
        </>
      ) : (
        <Button>login</Button>
      )}
    </div>
  );
};

export default User;
