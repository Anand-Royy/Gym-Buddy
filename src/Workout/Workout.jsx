import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Workout = ({ id, routineName }) => {
  return (
    <Card className='text-center m-10  p-4 '>
      <CardHeader>
        <CardTitle className='text-xl font-semibold'>{routineName}</CardTitle>
      </CardHeader>
      <CardContent className='flex justify-center items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={100}
          height={100}
          viewBox='0 0 640 512'
        >
          <path d='M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z' />
        </svg>
      </CardContent>
      <CardFooter className=' justify-center items-center'>
        <Button>
          <Link to={`/displayworkout/${id}`} style={{ color: 'white' }}>
            View
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Workout;
