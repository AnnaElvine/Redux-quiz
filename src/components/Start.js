import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
background-color: #6fc16f;
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
const StyledParagraph = styled.p`
  font-size: 25px;
  color: #000000;
  margin: 5px;
  padding: 20px;
  text-align: center;
`
const StartContainer = styled.div`
display: flex;
flex-direction: column;
/*background: white; */
/* border-radius: 20px; */
margin: 35px;
height: 500px;
align-items: center;
padding: 10px;
margin: 35px;
justify-content: center
`

export const Start = () => {
  return (
    <StartContainer>
      <StyledParagraph>Nu ska vi blanda färg, gissa vad det blir</StyledParagraph>
      <Link to="/quiz">
        <Button>
        Start
        </Button>
      </Link>
    </StartContainer>
  )
}