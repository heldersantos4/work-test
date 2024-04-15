'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from './Input';
import { Alert } from './Alert';
import { Inputs } from '@/types/cmp.form';

export const AuthForm = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();

  // Event to target data from form
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // console.log(watch('firstName'));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-3 items-center'
    >
      {errors.firstName && <Alert value='No mínimo, precisa-se de um nome.' />}
      {/* Inputs userFirstName */}
      <Input
        // defaultValue={'test'}
        placeholder='firstName'
        {...register('firstName', { required: true })}
      />
      {/* Inputs userLastName */}
      <Input
        placeholder='lastName'
        {...register('lastName')}
      />
      <input type='submit' />
    </form>
  );
};
