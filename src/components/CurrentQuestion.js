import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import Confetti from 'react-confetti-explosion';
/* import ConfettiExplosion from 'react-confetti-explosion'; */
import { Summary } from './Summary'
import { ProgressBar } from './ProgressBar';

const QuestionContainer = styled.div`
display: flex;
flex-direction: column;
background: white;
border-radius: 20px;
margin: 35px;
`
const QuestionImg = styled.img`
display: flex;
justify-content: center;
align-self: center;
width: 230px;
height: 100%;
`
const Rainbow = styled.img`
display: flex;
justify-content: center;
align-self: center;
height: 100%;
width: 200px;
`
const Buttons = styled.div`
display: grid;
justify-content: center;
align-items: center;
grid-template-columns: 2fr 2fr;
gap: 15px;
margin-left: 10px;
padding-bottom: 40px;
`

export const Button = styled.button`
background-color: pink;
font-size: 15px;
width: 100px;
height: 100px;
border-style: none;
border-radius: 100px; 
justify-self: center;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease 0s;
  &:hover {
    /* background-color: lightblue; */
    transform: translateY(-7px);
  }
`

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const over = useSelector((state) => state.quiz.quizOver)
  const dispatch = useDispatch();

  if (over) {
    return <Summary />
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
  const displayNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }
  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
    if (question.correctAnswerIndex === answerIndex) {
      setTimeout(displayNextQuestion, 500);
    } else {
      setTimeout(displayNextQuestion, 500);
    }
  };

  /* const borderAnswer = (index) => {
    if (correctAnswerIndex) {
      if (currentanswer.answerIndex === index) {
        if (currentanswer.isCorrect) {
          return {
            border: '6px solid #63A241'
          };
        }
        return { border: '6px solid #F64E66' };
      }
      return {};
    }
    return {};
  }; */

  return (
    <QuestionContainer>
      <Rainbow src={question.imgUrl} alt="" />
      <QuestionImg src={question.questionImg} alt="" />
      <Buttons>
        {question.options.map((option, index) => {
          return (
            <Button
              type="button"
              onClick={() => onAnswerSubmit(question.id, index, Confetti)}
              key={option}
              style={{ backgroundColor: option.toLowerCase() }} />
          )
        })}
      </Buttons>
      <ProgressBar />
    </QuestionContainer>
  )
}
