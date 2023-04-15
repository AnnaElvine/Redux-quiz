import React from 'react'
import styled from 'styled-components'
import Githubicon from './images/githubicon.png'

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 30px;
`;
const Name = styled.p`
  font-family: gillsans;
  font-size: 15px;
  margin-bottom: 0;
  color: black;
`;
const GitLink = styled.img`
  width: 30px;
  &:hover {
    color: white;
    filter: brightness(100); 
}
`;
const StyledA = styled.a`
  text-decoration: none;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;

export const Footer = () => {
  return (

    <FooterWrapper>
      <StyledA href="https://github.com/emiliasaberski">
        <Name>Emilia</Name>
        <GitLink src={Githubicon} alt="github" />
      </StyledA>
      <StyledA href="https://github.com/AnnaElvine">
        <Name>Anna</Name>
        <GitLink src={Githubicon} alt="github" />
      </StyledA>
      <StyledA href="https://github.com/LinaAdamsson">
        <Name>Lina</Name>
        <GitLink src={Githubicon} alt="github" />
      </StyledA>
      <StyledA href="https://github.com/AndreaHedstrom">
        <Name>Andrea</Name>
        <GitLink src={Githubicon} alt="github" />
      </StyledA>
    </FooterWrapper>
  );
};