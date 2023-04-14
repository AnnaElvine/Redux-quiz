import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from './CurrentQuestion';

export const Start = () => {
  return (
    <>
      <p>nu ska vi blanda färg, gissa vad det blir</p>
      <Link to="/quiz">
        <Button>
        Start
        </Button>
      </Link>
    </>
  )
}