import React, { useState } from "react";
import {
  ButtonApp,
  FirstComponent,
  InputBinary,
  Template,
  Title,
  BinaryConversion,
  Body
} from "./appStyled";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function App() {
  const [binary, setBinary] = useState("");
  const [Convert, setConvert] = useState([]);
  return (
    <Template>
      <Header />
      <Body>
        <Title>Conversor de binario</Title>
        <FirstComponent>
          <InputBinary
            onChange={(e) => {
              setBinary(e.target.value);
            }}
            id="outlined-multiline-static"
            label="Multiline"
            variant="outlined"
            disableUnderline
            required
          />

          <ButtonApp
            variant="contained"
            color="primary"
            onClick={() => {
              const aux = parseInt(binary, 2);
              setConvert(aux);
            }}
          >
            Converter
          </ButtonApp>
        </FirstComponent>
        <BinaryConversion variant="h6">
          Sua conversao e : {Convert ? Convert : ""}{" "}
        </BinaryConversion>
      </Body>
      <Footer />
    </Template>
  );
}
