import React from 'react';
import { BaseLayout } from '../components/layouts/BaseLayout';
import BaseForm from '../components/forms/BaseForm';

export default function Login() {
	return (
		<BaseLayout className={'flex flex-col w-full justify-content-center'}>
			<div className={'container w-full flex justify-center'}>
				<BaseForm />
			</div>
		</BaseLayout>
	);
}
