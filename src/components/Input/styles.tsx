import styled from "styled-components/native"

export const Container = styled.View`
  width: ${({ width }) => width ? width : '100%'};
  height: 60px;
  margin-top: 14px;
  background-color: #BDBDBD50;
  border-radius: 8px;
`;

export const TextInput = styled.TextInput``;