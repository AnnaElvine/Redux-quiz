import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

export const ProgressBar = () => {
  const currentQuestion = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );
  const correctPercent = (currentQuestion * 100) / 5;
  const percent = Number(correctPercent).toFixed();

  /* the bar container */
  const StyledContainer = styled.div`
    height: 1rem;
    width: 40%;
    align-self: center;
    background-color: lightblue;
    border-radius: 10px;
    margin-bottom: 0.5rem;
    position: absolute;
    top: 200px;
  `
  /* inside the bar */
  const StyledBar = styled.div`
    display: flex;
    height: 100%;
    width: ${percent}%;
    // background-color: #00a2b7;
    background-color: yellow;
    border-radius: 10px 0 0 10px;
    align-items: center;
    // font-family: 'Roboto';
    font-weight: bold;
    color: #0078be;
  `;

  //   const PaddedP = styled.p`
  //   padding-left: 15px;
  //   `;

  return (
    <StyledContainer>
      <StyledBar
        role="progressbar"
        aria-valuenow={percent - 10}
        aria-valuemin={0}
        aria-valuemax={100}>
        {/* <PaddedP>{percent}%</PaddedP> */}
      </StyledBar>
    </StyledContainer>
  );
};
