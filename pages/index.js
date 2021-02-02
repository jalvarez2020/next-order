import Head from 'next/head'
import {BaseLayout} from '../components/layouts/BaseLayout';
import {LogoLeft} from '../components/shared/LogoHeaders';

export default function Home() {
 console.log(process.env.NEXT_PUBLIC_WORKING)
  return (
    <BaseLayout >
      <h1>{process.env.NEXT_PUBLIC_WORKING}</h1>
    </BaseLayout>
  )
}
