import React from "react";

import { Container, TextInput, MaskTextInput } from "./styles";

const Input = ({ width, icon, placeholder, mask, value, type, options, onChangeText }) => {
  return (
    <Container width={width}>
      {icon && icon}

      {
        mask
          ? <MaskTextInput value={value} type={type} options={options} onChangeText={(text) => onChangeText(text)} placeholder={placeholder}/>
          : <TextInput value={value} onChangeText={(text) => onChangeText(text)} placeholder={placeholder}/>
      }
    </Container>
  );
}

export default Input;