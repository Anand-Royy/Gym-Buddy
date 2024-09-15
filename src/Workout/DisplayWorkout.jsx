import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const DisplayWorkout = () => {
  const { id } = useParams();
  const [routine, setRoutine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoutine = async () => {
      try {
        const response = await fetch(
          `https://gym-buddy-backend-one.vercel.app/api/routines/${id}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRoutine(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoutine();
  }, [id]);
  console.log(routine);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <h1 className='text-3xl mx-auto my-5 text-neutral-50'>
        {routine.routineName}
      </h1>
      <Table className='w-[500px] mx-auto rounded-full border border-white'>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[300px]'>Workout Name</TableHead>
            <TableHead>Sets</TableHead>
            <TableHead>Reps</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {routine.exercises.map((field) => {
            const { id, workoutName, reps, sets } = field;
            console.log(workoutName);
            return (
              <TableRow key={id}>
                <TableCell className='font-medium'>{workoutName}</TableCell>
                <TableCell>{reps}</TableCell>
                <TableCell>{sets}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default DisplayWorkout;
