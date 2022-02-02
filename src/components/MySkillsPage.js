import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { LightTheme } from "./Themes.js";
import { Design, Develope } from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <Main>
          <Title>
            <Design width={40} height={40} />
            Application Developer
          </Title>
          <Description>
            Develop apps and provide irreplaceable things for users
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>Swift, Firebase, ReactNative</p>
          </Description>
          <Description>
            <strong>TOOLS</strong>
            <p>Xcode, Android Studio, Genymotion, etc.</p>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} />
            Frontend Developer
          </Title>
          <Description>
            I want to continue doing a lot of development on the front end.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>Html, Css, Js, React, Vue, Tailwind, PHP, MySQL,etc.</p>
          </Description>
          <Description>
            <strong>TOOLS</strong>
            <p>VScode, Github, MAMP, Discord, Slack etc.</p>
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
