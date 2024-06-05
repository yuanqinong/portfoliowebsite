import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
      </select>
      <input type="text" placeholder="Full Name" {...register("Full Name", {required: true})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="text" placeholder="Subject" {...register("Subject", {required: true, maxLength: 20})} />
      <textarea {...register("Message", {required: true})} />

      <input type="submit" />
    </form>
  );
}