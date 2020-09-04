import React from "react";
import styled from "styled-components";
import { Avatar, Button } from "@material-ui/core";

export const HeaderContent = styled.div`
  && {
    display: flex;
    width: 100%;
    height: 10vh;
    align-items:center;
    background-color: #9ccc65;
    flex-shrink: 0;
  }
`;
export const AvatarStyled = styled(({ ...props }) => <Avatar {...props} />)`
  && {
   
    background-color: #aed581;
  }
`;
export const ButtonStyled = styled(({ ...props }) => <Button {...props} />)`
  && {
    background-color: #aed581;
    padding:10px;
    height:10%;
    color: #3f51b5;
    font-family: "Century Gothic", CenturyGothic, Geneva, AppleGothic, sans-serif;
     & .hover {
      background-color: red;
      border-color: red;
      box-shadow: none;
    }
  }
`;
