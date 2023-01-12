import React from 'react'
import { Navigate, useParams } from 'react-router'
import { getHeroById } from '../helpers';

export const HeroPage = () => {

  const { id } = useParams();

  const hero = getHeroById( id );

  return (
    <>
      { !hero ? ( <Navigate to="/marvel" /> ) : ( <h1>Hero</h1> ) }
    </>
  )
}
