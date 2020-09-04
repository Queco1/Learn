import React from "react";
import { HeaderContent, AvatarStyled, ButtonStyled } from "./styled";
import { Assignment, School , SportsEsports } from "@material-ui/icons/";
export default function Header() {
  return (
    <HeaderContent>
      <ButtonStyled
        startIcon={
          <AvatarStyled aria-label="recipe" style={{ color: "#3f51b5" }}>
            <Assignment />
          </AvatarStyled>
        }
      >
        Convesor Binario
      </ButtonStyled>
      <ButtonStyled
        startIcon={
          <AvatarStyled aria-label="recipe" style={{ color: "#3f51b5" }}>
            <School />
          </AvatarStyled>
        }
      >
        Convesor Decimal
      </ButtonStyled>
      <ButtonStyled
        startIcon={
          <AvatarStyled aria-label="recipe" style={{ color: "#3f51b5" }}>
            <SportsEsports />
          </AvatarStyled>
        }
      >
        Convesor Hexadecimal
      </ButtonStyled>
    </HeaderContent>
  );
}
