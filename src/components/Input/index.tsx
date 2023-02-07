import React from "react";

import { Container, TextInput } from "./styles";

const Input = ({ width, icon, placeholder }) => {
  return (
    <Container width={width}>
      {icon && icon}
      <TextInput placeholder={placeholder}/>
    </Container>
  );
}

export default Input;