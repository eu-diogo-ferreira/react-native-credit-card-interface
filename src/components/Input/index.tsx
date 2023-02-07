import React from "react";

import { Container, TextInput } from "./styles";

const Input = ({ width }) => {
  return (
    <Container width={width}>
      <TextInput />
    </Container>
  );
}

export default Input;