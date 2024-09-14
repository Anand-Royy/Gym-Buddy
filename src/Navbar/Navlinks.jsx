import User from './User';

const Navlinks = () => {
  return (
    <div className='nav-links'>
      <ul>
        <li>
          <a href='/'>home</a>
        </li>
        <li>
          <a href='#'>about</a>
        </li>
        <li>
          <a href='#'>workouts</a>
        </li>
        <li>
          <a href='#'>events</a>
        </li>
      </ul>
      <User />
    </div>
  );
};

export default Navlinks;
