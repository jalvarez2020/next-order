import React from 'react';
import {useForm} from 'react-hook-form';

export default function PassInput({type, name, required, placeholder, label}) {
  const { register, handleSubmit, errors } = useForm();
  return (
    <div className={'container flex flex-col w-1/2 mt-10'}>
      <label>{label=label}</label>
      <input type={type} name={name} required={required} placeholder={placeholder} ref={register} autoComplete={"current-password"}/>
    </div>
  )
}
