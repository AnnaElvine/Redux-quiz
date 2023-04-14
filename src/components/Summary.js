import React from 'react';
import { quiz } from 'reducers/quiz';
import styled from 'styled-components';
// import Confetti from 'react-confetti-explosion';
import Confetti from 'react-confetti';
import { useSelector, useDispatch } from 'react-redux';
import Rainbow from './images/PinkSix.png';

const SummaryContainer = styled.div`
display: flex;
flex-direction: column;
// background: white;
height: 500px;
border-radius: 20px;
margin: 35px;
`
const RainbowImage = styled.img`
width: 45%;
align-self: center;
mix-blend-mode: multiply;
`
const SummaryText = styled.h1`
font-size: 25px;
font-family: 'Rubik Wet Paint', cursive;
color: lightblue;
text-align: center;
font-weight: bold;
`
const Button = styled.button`
display: flex;
align-self: center;
align-items: center;
justify-content: center;
background-color: yellow;
font-size: 15px;
font-family: 'Helvetica', sans-serif;
font-weight: bold;
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
        <RainbowImage src={Rainbow} alt="" />
        <SummaryText>
          <h1>YAY! YOU GOT {correctAnswers} COLOURS OUT OF 5 JUST RIGHT!</h1>
        </SummaryText>
        <Button
          type="button"
          onClick={() => dispatch(quiz.actions.restart())}>
        RESTART
        </Button>
      </SummaryContainer>
    </>
  )
}