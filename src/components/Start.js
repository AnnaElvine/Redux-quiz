/* eslint-disable import/no-duplicates */
/* eslint-disable no-tabs */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// const Button = styled.button`
// background-color: yellow;
// font-size: 15px;
// width: 100px;
// height: 100px;
// border-style: none;
// border-radius: 100px;
// justify-self: center;
// box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
//   cursor: pointer;
//   outline: none;
//   transition: all 0.3s ease 0s;
//   &:hover {
//   transform: translateY(-7px);
//   }
// `

const Button = styled.button`
  background-color: yellow;
  font-family: 'Rubik Wet Paint', cursive;
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 100px;
  height: 100px;
  border-style: none;
  border-radius: 50%;
  justify-self: center;
  background-image: linear-gradient( 160deg, yellow );
  cursor: pointer;
  box-shadow:
    0 0 60px 30px yellow,  /* inner */
    0 0 100px 60px yellow, /* middle */
    0 0 140px 90px yellow; /* outer */;
    transition: box-shadow 0.6s;
    outline: none;
    transition: all 0.3s ease 0s;
    &:hover {
    transform: translateY(-7px);
    }
  color: lightblue;
`

// const StyledParagraph = styled.p`
//   font-size: 60px;
//   font-weight: bold;
//   font-family: 'Rubik Wet Paint', cursive;
//   // color: #00a2b7;
//   color: lightblue;
//   margin: 50px;
//   padding: 20px;
//   text-align: center;
//   cursor: default;
// `
// const StyledSpan = styled.span`
//   color: purple;
//   font-weight: bold;
//   font-family: 'Rubik Wet Paint';
//   font-size: 50px;
//   &:hover {
//     color: green;
//   }
//   `
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

// const Sun = styled.div`
// width: 40rem;
//   height: 40rem;
//   margin: 3rem auto;
//   position: relative;
//   background: radial-gradient(transparent 50%, white), radial-gradient(yellow, transparent 70%);
//   -webkit-mask-image: radial-gradient(rgba(0, 0, 0, 1.0) 40%, transparent 65%);
//   mask-image: radial-gradient(rgba(0, 0, 0, 1.0) 40%, transparent 65%);
//   border-radius: 50%;
// `

export const Start = () => {
  return (
    <StartContainer>
      {/* <StyledParagraph>
        WHAT COLOUR IS THAT?
        {/* WHAT <StyledSpan>COLOUR</StyledSpan> IS THAT? */}
      {/* </StyledParagraph> */}
      {/* <Sun>
        <div className="sun" />
      </Sun> */}
      <Link to="/quiz">
        <Button>
        WHAT COLOUR IS THAT?
        </Button>
      </Link>
      {/* <StyledParagraph>
        TAKE A GUESS!
      </StyledParagraph> */}
    </StartContainer>
  );
};