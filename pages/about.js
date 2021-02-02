import Image from 'next/image';
import { BaseLayout } from '../components/layouts/BaseLayout';

export async function getStaticProps() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
	const items = await res.json();
	return {
		props: {
			items,
		},
	};
}

export default function Home({ items }) {
	return (
		<BaseLayout >
			<div className={'w-9/12 m-auto p-10 shadow-2xl rounded-xl overflow-auto'}>
				<h2>Most Popular :</h2>
				<div
					className={'w-20 h-3 border-gray-800 border-b-2 border-solid'}></div>
				<div
					className={
						'w-full h-screen grid grid-cols-3 justify-evenly m-3 gap-5'
					}>
					{items.map(({ id, title, thumbnailUrl }) => {
						return (
							<div className={'w-96 h-25 flex mx-auto my-2 p-0 shadow-md rounded-xl'}>
								<Image
                  className={'rounded-l-xl'}
                  
									key={id}
									src={`${thumbnailUrl}`}
									alt='Picture of food'
									width={130}
									height={130}
									quality
								/>
								<div className={'h-32 w-64 ml-4'}>
                  <h6>Salads</h6>
									<p className={'text-sm font-light'}>Different types of salads from around the world</p>
                  <button className={'h-8 w-28 bg-yellow-500 m-4 p-1 text-sm text-white shadow-lg rounded-lg'}>Order Now</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</BaseLayout>
	);
}
