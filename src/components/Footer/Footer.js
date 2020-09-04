import React from "react";
import { FooterStyle, IconsContainer } from "./styled";
import { Facebook, WhatsApp, LinkedIn, Twitter } from "@material-ui/icons/";
import { IconButton, Typography } from "@material-ui/core";

export default function Footer() {
  return (
    <FooterStyle>
      <Typography>Develop by Pedro Henrique</Typography>
      <IconsContainer>
        <IconButton>
          <Facebook />
        </IconButton>

        <IconButton>
          <WhatsApp />
        </IconButton>

        <IconButton>
          <LinkedIn />
        </IconButton>

        <IconButton>
          <Twitter />
        </IconButton>
      </IconsContainer>
    </FooterStyle>
  );
}
