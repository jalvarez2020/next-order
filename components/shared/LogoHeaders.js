import React from 'react';
import Image from 'next/image';

const LogoLeft = () => {
  return(
    <div className={'flex w-full items-start border-b-2 border-gray-100'}>
      <Image
        src='/Rlogo.jpg'
        alt='Restaurant logo'
        width={320}
        height={120}
      />
    </div>
  )
}

export {
  LogoLeft
}