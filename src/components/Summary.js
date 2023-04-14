import React from 'react';
import { quiz } from 'reducers/quiz';
import styled from 'styled-components';
import Confetti from 'react-confetti-explosion';
import { useSelector, useDispatch } from 'react-redux';

const SummaryContainer = styled.div`
display: flex;
flex-direction: column;
background: white;
height: 500px;
border-radius: 20px;
margin: 35px;
`

const RainbowImage = styled.img`
width: 100%;
height: 100px;
`
const SummaryText = styled.h1`
font-size: 18px;
text-align: center;
`

const Button = styled.button`
display: flex;
align-self: center;
align-items: center;
justify-content: center;
background-color: pink;
font-size: 15px;
width: 150px;
height: 40px;
border-style: none;
border-radius: 15px; 
cursor: pointer;
  outline: none;
  transition: all 0.3s ease 0s;
  &:hover {
    background-color: lightblue;
    transform: translateY(-7px);
  }
`

export const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
  const dispatch = useDispatch()
  return (
    <>
      <Confetti />
      <SummaryContainer>
        <RainbowImage src="./images/PinkSix.png" alt="" />
        <SummaryText>
          <h1>You got {correctAnswers} correct answers out of 5</h1>
        </SummaryText>
        <Button
          type="button"
          onClick={() => dispatch(quiz.actions.restart())}>
        Restart
        </Button>
      </SummaryContainer>
    </>
  )
}