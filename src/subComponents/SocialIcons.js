import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github, Instagram, Tiktok, YouTube } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.text};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/hayata-0" }}
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>

      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.tiktok.com/@divyan1454?lang=ja-JP" }}
        >
          <Tiktok
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>

      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.instagram.com/hyyt_div/" }}
        >
          <Instagram
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>

      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{
            pathname: "https://youtube.com/channel/UCesyKDkQd610Sr4dJARSzCw",
          }}
        >
          <YouTube
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>

      <Line />
    </Icons>
  );
};

export default SocialIcons;
