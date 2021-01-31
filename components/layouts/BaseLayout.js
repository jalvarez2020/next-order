import React from 'react';
import Head from 'next/head';
import pageConfig from '../config';
import { SplitHeader } from '../shared/Headers';
import {LogoLeft} from '../shared/LogoHeaders';

const BaseLayout = (props) => {
	return (
		<div className={pageConfig.LayoutContainer.default}>
			<Head>
				<title>Javi's Portfolio</title>
			</Head>
			<LogoLeft />
			<SplitHeader />
			{props.children}
		</div>
	);
};

const Hamburger = (props) => {
	return <>{ props.children }</>;
}

export { BaseLayout, Hamburger };
