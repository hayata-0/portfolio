import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
`;

const Main = () => {
  return <MainContainer>Main component/Page</MainContainer>;
};

export default Main;
