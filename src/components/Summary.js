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
justify-items: center;
align-items: center;
height: 500px;
border-radius: 20px;
margin: 35px;
`
const RainbowImage = styled.img`
width: 100vw;
align-self: center;
top: 0;
margin-bottom: -65px;

@media only screen and (min-width: 600px) {
  width: 40%;
}
`
const SummaryText = styled.h1`
font-size: 18px;
font-family: 'Archivo Black', sans-serif;
color: pink;
text-align: center;
text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
margin-bottom: 20px;

@media only screen and (min-width: 769px) {
  margin-bottom: 20px;
}
`
const Button = styled.button`
display: flex;
align-self: center;
align-items: center;
justify-content: center;
background-color: yellow;
font-size: 15px;
font-family: 'Archivo Black', sans-serif;
width: 150px;
padding: 10px 0;
border-style: none;
border-radius: 30px; 
margin-top: 30px;
bottom: 0;
cursor: pointer;
  outline: none;
  transition: all 0.3s ease 0s;
  &:hover {
    background-color: lightblue;
    transform: translateY(-7px);
  }
  @media only screen and (min-width: 769px) {
    margin-top: 40px;
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
      </SummaryContainer>
      <Button
        type="button"
        onClick={() => dispatch(quiz.actions.restart())}>
        RESTART
      </Button>
    </>
  )
}