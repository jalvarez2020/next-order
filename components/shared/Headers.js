import React from 'react';
import Link from 'next/link';
import pageConfig from '../config';

const DefaultHeader = () => {
	return (
		<div
			className={pageConfig.HeaderContainer.default}>
			<Link href='/'>
				<a className={pageConfig.LinkText.default}> All Menus: </a>
			</Link>
			<Link href='/about'>
				<a className={pageConfig.LinkText.default}> Salads </a>
			</Link>
			<Link href='/order'>
				<a className={pageConfig.LinkText.default}> Sandwiches </a>
			</Link>
			<Link href='/info'>
				<a className={pageConfig.LinkText.default}> Soups </a>
			</Link>
			<Link href='/info'>
				<a className={pageConfig.LinkText.default}> Pizza </a>
			</Link>
			<Link href='/info'>
				<a className={pageConfig.LinkText.default}> Steak </a>
			</Link>
			<Link href='/info'>
				<a className={pageConfig.LinkText.default}> Fish </a>
			</Link>
			<Link href='/info'>
				<a className={pageConfig.LinkText.default}> Chicken </a>
			</Link>
			<Link href='/info'>
				<a className={pageConfig.LinkText.default}> Desert </a>
			</Link>
			<Link href='/login'>
				<a className={pageConfig.LinkText.default}> Login </a>
			</Link>
		</div>
	);
};

const SplitHeader = () => {
	return(
		<div
			className={pageConfig.HeaderContainer.split}>
			<Link href='/'>
				<a className={pageConfig.LinkText.default}> All Menus:</a>
			</Link>
			<Link href='/about'>
				<a className={pageConfig.LinkText.default}> Salads </a>
			</Link>
			<Link href='/order'>
				<a className={pageConfig.LinkText.default}> Sandwiches </a>
			</Link>
			<Link href='/info'>
				<a className={pageConfig.LinkText.default}> Soups </a>
			</Link>
			<Link href='/info'>
				<a className={pageConfig.LinkText.default}> Pizza </a>
			</Link>
			<Link href='/info'>
				<a className={pageConfig.LinkText.default}> Steak </a>
			</Link>
			<Link href='/info'>
				<a className={pageConfig.LinkText.default}> Fish </a>
			</Link>
			<Link href='/info'>
				<a className={pageConfig.LinkText.default}> Chicken </a>
			</Link>
			<Link href='/info'>
				<a className={pageConfig.LinkText.default}> Desert </a>
			</Link>
			<Link href='/login'>
				<a className={pageConfig.LinkText.default}> Login </a>
			</Link>
			<div className={'inline-flex w-1/3'}>
				<div className={'inline-flex m-auto items-center'}>
					<div className={'pr-2'}>search:</div>
					<input type='search'  className={'w-auto h-9 bg-white rounded-xl shadow-md border-gray-300 border-2'} />
				</div>
			</div>
		</div>
	);
}

export { DefaultHeader, SplitHeader };
