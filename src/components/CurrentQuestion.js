import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Summary } from './Summary'

const QuestionContainer = styled.div`
display: flex;
flex-direction: column;
background: white;
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
width: 120px;
`

const Buttons = styled.div`
display: grid;
justify-content: center;
align-items: center;
grid-template-columns: 2fr 2fr;
margin-left: 30px;
gap: 20px;
`
const Button = styled.button`
background-color: pink;
font-size: 15px;
width: 150px;
height: 40px;
border-style: none;
border-radius: 15px; 
`

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const currentAnswer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex])
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

  const isCorrect = (index) => {
    if (currentAnswer) {
      if (currentAnswer.answerIndex === index) {
        if (currentAnswer.isCorrect) {
          return {
            background: '#63A241'
          };
        }
        return { background: '#F64E66' };
      }
      return {};
    }
    return {};
  };

  return (
    <QuestionContainer>
      <Rainbow src={question.imgUrl} alt=""/>
      <QuestionImg src={question.questionImg} alt="" />
      <Buttons>
        {question.options.map((option, index) => {
          return (
            <>
              <Button
                type="button"
                onClick={() => onAnswerSubmit(question.id, index)}
                key={option}
                style={isCorrect(index)}>
                {option}
              </Button>
              {/* <h1>{isCorrect}</h1> */}
            </>
          )
        })}
      </Buttons>
    </QuestionContainer>
  )
}
