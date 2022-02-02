import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes.js";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";

import astronaut from "../assets/Images/spaceman.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0%{
  transform: translateY(-10px);
}
50%{
  transform: translateY(15px) translateX(15px);
}
100%{
  transform: translateY(-10px);
}
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: "Ubutntu Mono", monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>

        <Main>
          東京都在住の専門学生です。学校ではWEB開発を専攻しております。主にフロントエンド開発とiosアプリケーションの開発の2つを軸に活動しています。
          <br />
          元々、プログラミングは経験はなく、専門学生の1年時から始めました。最初の勉強方法は「Udemy」などのサイトを活用し、基礎を身につけました。
          <br />
          最近では、GitHubのコードも読みながら、日々、新しい技術を身につけています。
          <br />
          今後は、アプリ開発に力を入れていきたいです。世の中に残るサービスを作成し、世界中の方々が使用していただけるものを提供します。
          <br />
          また、UI・UXの観点もトップレベルを目指していきたいと思います。
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
