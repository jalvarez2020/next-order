import React from 'react';
import Head from 'next/head';
import pageConfig from '../config';
import { SplitHeader } from '../shared/Headers';
import { LogoLeft } from '../shared/LogoHeaders';

const BaseLayout = (props) => {
	return (
		<div className={pageConfig.LayoutContainer.default}>
			<Head>
				<title>New App Co</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'http://schema.org',
							'@type': 'Restaurant',
							address: {
								'@type': 'PostalAddress',
								addressLocality: 'Las Vegas',
								addressRegion: 'NV',
								postalCode: '89179',
								streetAddress: '',
							},
							email: 'mailto:javialvarez2020@gmail.com',
							jobTitle: 'Full Stack Developer',
							name: 'Javier Alvarez',
							url: 'https://www.linkedin.com/in/javi2020/',
						}),
					}}
				/>
			</Head>
			<LogoLeft />
			<SplitHeader />
			{props.children}
		</div>
	);
};

const Hamburger = (props) => {
	return <>{props.children}</>;
};

export { BaseLayout, Hamburger };
