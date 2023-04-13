import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
  const onButtonClick = () => {
    dispatch(quiz.actions.submitAnswer());
    dispatch(quiz.actions.goToNextQuestion());
  }

  return (
    <div>
      <img src={question.questionImg} alt="" />
      {question.options.map((option) => {
        return (
          <button
            type="button"
            onClick={onButtonClick}>
            {option}
          </button>
        )
      })}
    </div>
  )
}
