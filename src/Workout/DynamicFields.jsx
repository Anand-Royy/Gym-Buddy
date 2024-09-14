import { useState } from 'react';
import delImg from '../assets/icons8-trash-24.png';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
const DynamicFields = ({
  fields,
  setFields,
  handleInput,
  delField,
  handleSubmit,
  name,
  setName,
}) => {
  const navigate = useNavigate();
  return (
    <div className='form-section flex flex-col justify-center m-auto h-full'>
      <h1 className='mx-auto text-3xl mb-10'>Create Workout Routine</h1>
      <form
        className='space-y-8  w-full max-w-md p-4 border border-gray-300 rounded-lg h-4/6 overflow-y-auto bg-stone-900'
        onSubmit={(e) => handleSubmit(e)}
      >
        {/* Static Field for Routine Name */}
        <div className='mb-4'>
          <label className='block text-sm font-medium mb-2'>Routine Name</label>
          <input
            className='block border border-white rounded-lg h-9 px-3'
            name='routineName'
            type='text'
            onChange={(e) => setName(e.target.value)}
            placeholder='Routine Name'
            value={name}
          />
        </div>

        {/* Dynamic Fields */}
        {fields.map((field, index) => (
          <div key={field.id} className='flex flex-row'>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-2'>
                Workout Name
              </label>
              <input
                className='block border border-white rounded-lg h-9 px-3 '
                name='workoutName'
                type='text'
                onChange={(e) => handleInput(e, index)}
                placeholder='Workout Name'
                value={field.workoutName}
              />
              <div className='form-flex flex flex-row mt-6 '>
                <label className=' text-sm font-medium m-2 mx-3'>Reps</label>
                <input
                  className='block border w-24 border-white rounded-lg h-9 px-3'
                  name='reps'
                  type='number'
                  onChange={(e) => handleInput(e, index)}
                  placeholder='Reps'
                  value={field.reps}
                />

                <label className=' text-sm font-medium m-2 mx-3'>Sets</label>
                <input
                  className='block border w-24 border-white rounded-lg h-9 px-3'
                  name='sets'
                  type='number'
                  onChange={(e) => handleInput(e, index)}
                  placeholder='Sets'
                  value={field.sets}
                />
              </div>
            </div>
            <img
              src={delImg}
              className='my-auto ms-3'
              onClick={() => delField(field.id)}
              width={20}
              height={20}
              alt='delete'
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}

        {/* Button to Add More Fields */}
        <Button
          type='button'
          onClick={() =>
            setFields([
              ...fields,
              { id: fields.length, workoutName: '', reps: '', sets: '' },
            ])
          }
          className='mt-4 border-white'
          variant='secondary outline'
        >
          Add New Exercise
        </Button>
        <br />
        {/* Submit Button */}
        <Button
          type='submit'
          variant='secondary '
          className='mx-auto block bg-destructive'

        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default DynamicFields;
