import { useState } from 'react';
import DynamicFields from './DynamicFields';
import { useNavigate } from 'react-router-dom';

const CreateWorkout = ({ fields, setFields, length }) => {
  const [name, setName] = useState(''); // using name to set the value of the routine name (setWorkout)

  const handleInput = (e, id) => {
    const { value, name } = e.target;
    const newInput = fields.map((field) => {
      if (field.id === id) {
        return { ...field, [name]: value };
      }
      return field;
    });
    setFields(newInput);
  };

  async function handleSubmit(e) {
    // const navigate = useNavigate();
    e.preventDefault();
    // navigate('/');

    if (!name) {
      alert('Enter the values');
      return;
    }
    for (let i = 0; i < fields.length; i++) {
      const { workoutName, reps, sets } = fields[i];
      if (!workoutName || !reps || !sets) {
        alert('Enter the values for all fields');
        return;
      }
    }
    const data = { length, name, fields };
    console.log(data);
    setName('');
    try {
      const res = await fetch(
        'https://gym-buddy-backend-one.vercel.app/api/routines',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        console.log(res);
      } else {
        console.log(res.error);
      }
    } catch (error) {
      console.log('error', error);
    }
    setFields([{}]);
  }

  const delField = (id) => {
    const newFields = fields.filter((f) => {
      return f.id != id;
    });
    console.log(fields);
    setFields(newFields);
  };

  return (
    <DynamicFields // props drilling
      fields={fields}
      setFields={setFields}
      handleInput={handleInput}
      delField={delField}
      handleSubmit={handleSubmit}
      name={name}
      setName={setName}
    />
  );
};

export default CreateWorkout;
