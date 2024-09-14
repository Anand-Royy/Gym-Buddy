import Workout from './Workout';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const WorkoutSection = ({setLength}) => {
  const [response, setResponse] = useState([{}]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('http://localhost:5000/api/routines');
        const { data } = await resp.json();
        console.log(data);
        setResponse(data);
        setLength(data.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='workout-section'>
      <div className='workout-cards min-h-8'>
        {response.length > 0 ? (
          response.map((item) => (
            <Workout
              key={item.id}
              id={item.id}
              routineName={item.routineName}
            />
          ))
        ) : (
          <h1 className='mx-auto text-3xl'>Empty!</h1>
        )}
      </div>
      <br />
      <Button size='lg'>
        <Link to='/createworkout' style={{ color: 'white' }}>
          Create Workout
        </Link>
      </Button>
    </div>
  );
};

export default WorkoutSection;
