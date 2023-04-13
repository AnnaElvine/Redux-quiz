import React from 'react';
import { quiz } from 'reducers/quiz';
import { useDispatch } from 'react-redux';

export const Summary = () => {
  const dispatch = useDispatch()
  return (
    <button
      type="button"
      onClick={() => dispatch(quiz.actions.restart())}>
        Restart
    </button>
  )
}