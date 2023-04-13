import React from 'react';
import { quiz } from 'reducers/quiz';
import Confetti from 'react-confetti-explosion';
import { useSelector, useDispatch } from 'react-redux';

export const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
  const dispatch = useDispatch()
  return (
    <>
      <Confetti />
      You got {correctAnswers} correct answers out of 5
      <button
        type="button"
        onClick={() => dispatch(quiz.actions.restart())}>
        Restart
      </button>
    </>
  )
}
