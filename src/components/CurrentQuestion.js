import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import styled from 'styled-components'

const ImgButton = styled.img`
    width: 100px;
    cursor: pointer;
    `

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  const dispatch = useDispatch(quiz.actions.submitAnswer);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
  const onButtonClick = () => {
    dispatch(quiz.actions.submitAnswer())
    dispatch(quiz.actions.goToNextQuestion())
  }

  return (
    <div>
      <img src={question.questionImg} alt="" />
      {question.options.map((option) => {
        return (
          <ImgButton
            src={option}
            alt="text"
            onClick={onButtonClick} />
          // <ImgButton
          //   type="button"
          //   onClick={onButtonClick}>
          //   {option}
          // </ImgButton>
        )
      })}
    </div>
  )
}
