/* eslint-disable import/no-duplicates */
/* eslint-disable no-tabs */
import React from 'react';
import { Link } from 'react-router-dom'
import { keyframes } from 'styled-components';
import styled from 'styled-components'

const Button = styled.button`
background-color: yello;
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
  transform: translateY(-7px);
  }
`
const StyledParagraph = styled.p`
  font-size: 25px;
  color: #000000;
  margin: 5px;
  padding: 20px;
  text-align: center;
  cursor: default;
`
const balanceAnimation = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  30%, 60% {
    transform: rotate(-45deg);
  }
`;

const shrinkJumpAnimation = keyframes`
  10%, 35% {
    transform: scale(2, .2) translate(0, 0);
  }

  45%, 50% {
    transform: scale(1) translate(0, -150px);
  }

  80% {
    transform: scale(1) translate(0, 0);
  }
`;
const StyledSpan = styled.span`
  color: purple;
  font-weight: bold;
  font-size: 35px;
  &:hover {
    color: green;
  }
  .word span {
    display: inline-block;
    font-size: 100px;
    line-height: 0.8;
  }
  .word span:nth-child(1).active {
    animation: ${balanceAnimation} 1.5s ease-out;
    transform-origin: bottom left;
  }
  .word span:nth-child(2).active {
    animation: ${shrinkJumpAnimation} 1s ease-in-out;
    transform-origin: bottom center;
  }
  `

const StartContainer = styled.div`
display: flex;
flex-direction: column;
margin: 35px;
height: 500px;
align-items: center;
padding: 10px;
margin: 35px;
justify-content: center;
`

const Sun = styled.div`
width: 40rem;
  height: 40rem;
  margin: 3rem auto;
  position: relative;
  background: radial-gradient(transparent 50%, white), radial-gradient(yellow, transparent 70%);
  -webkit-mask-image: radial-gradient(rgba(0, 0, 0, 1.0) 40%, transparent 65%);
  mask-image: radial-gradient(rgba(0, 0, 0, 1.0) 40%, transparent 65%);
  border-radius: 50%;
`

export const Start = () => {
  return (
    <StartContainer>
      <StyledParagraph>
        Nu ska vi blanda lite
        <StyledSpan>
          <div className="word">
            <span className="active">f</span>
            <span className="word">
              <span className="active">ä</span>
            </span>
            <span className="word">
              <span className="active">r</span>
            </span>
            <span className="word">
              <span className="active">g</span>
            </span>
          </div>
        </StyledSpan>
         gissa vad det blir...
      </StyledParagraph>
      <Sun>
        <div className="sun" />
      </Sun>
      <Link to="/quiz">
        <Button>
          Start
        </Button>
      </Link>
    </StartContainer>
  );
};