import React, { ReactElement } from "react";

import { Container, TextInput, MaskTextInput } from "./styles";

interface PropsInput {
  width?: string,
  icon: ReactElement | boolean,
  placeholder: string,
  mask?: boolean,
  value: string,
  type?: any,
  options?: any,
  onChangeText: (text: string) => void
}

const Input: React.FC<PropsInput> = ({
  width,
  icon,
  placeholder,
  mask,
  value,
  type,
  options,
  onChangeText
}) => {
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