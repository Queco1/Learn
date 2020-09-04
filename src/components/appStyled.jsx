import React from "react";
import styled from "styled-components";
import { Input, Button, Typography } from "@material-ui/core";

export const Template = styled.div`
  && {
    background-color: #3f51b5;
    display: flex;
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
    margin: 0;
  }
`;
export const Body = styled.div`
  && {
    flex: auto;
    display:flex
    flex-direction: column;
  }
`;
export const ButtonApp = styled(Button)`
  && {
    border: 2px solid white;
    border-radius: 3px;
    margin: 2em;
    padding: 0.25em 1em;
  }
`;
export const FirstComponent = styled.div`
  && {
    display: flex;
    justify-content: space-between;
  }
`;
export const InputBinary = styled(({ ...props }) => <Input {...props} />)`
  && {
    color: white;
    width: 100%;
    border: 2px solid white;
    margin: 2em;
  }
`;
export const Title = styled.h1`
  && {
    margin-top:0;
    color: white;
    margin-left: 1em;
  }
`;
export const BinaryConversion = styled(Typography)`
  && {
    color: white;
    margin-left: 1.5em;
  }
`;
