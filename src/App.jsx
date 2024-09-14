import { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import CreateWorkout from './Workout/CreateWorkout';
import WorkoutSection from './Workout/WorkoutSection';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DisplayWorkout from './Workout/DisplayWorkout';

function App() {
  const [fields, setFields] = useState([
    { id: 0, workoutName: '', reps: '', sets: '' },
  ]);
  const [length, setLength] = useState(0);
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<WorkoutSection setLength={setLength} />} />
          <Route
            path='/createworkout'
            element={<CreateWorkout fields={fields} setFields={setFields} length={length}/>}
          />
          <Route
            path='/displayworkout/:id'
            element={<DisplayWorkout fields={fields} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
