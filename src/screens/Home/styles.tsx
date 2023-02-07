import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 16px;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: #4e455410;
`;

export const Header = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #4e455e;
`;

export const Subtitle = styled.Text`
  font-weight: 300;
  color: #4e455e;
`;

export const Content = styled.View`
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  background-color: #FFFFFF;
  align-items: center;
`;

export const View = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  background-color: #6a1b9a;
  align-items: center;
  justify-content: center;
  border-radius: 55px;
`;

export const TextButton = styled.Text`
  color: #FFFFFF;
`;
