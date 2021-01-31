import React from 'react';
import PassInput from './Inputs';
import pageConfig from '../config';
import { useForm } from 'react-hook-form';

export default function BaseForm() {
	return (
		<form className={pageConfig.formContainer.default}>
      <PassInput
        type='email'
        name='email'
        placeholder='youremail@email.com'
        label='Email'
      />
      <PassInput
				type='password'
				name='password'
				label='password'
				required={true}
			/>    
			<input type='submit' className={'h-8 w-16 my-2 text-gray-50 bg-green-500 rounded-md'} />
		</form>
	);
}
