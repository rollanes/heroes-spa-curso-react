import React from 'react'
import { HeroList } from '../components';

export const DcPage = () => {
  return (
    <>
      <h1 className='mt-2'>DC Comics</h1>
      <hr/>

      <HeroList publisher={'DC Comics'} />
    </>
  )
}
