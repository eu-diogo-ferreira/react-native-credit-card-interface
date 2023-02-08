import React from "react";

import { Container, Content, Strip, TextCVV, ViewInformation, View, Text } from "./styles";

const Card = ({ data, back, icon }) => {
  return (
    <Container>
      <Content>
        {
          back
            ? <Strip>
              <TextCVV>{data.cvv}</TextCVV>
            </Strip>
            : <ViewInformation>
              <View>
                <Text bold={true} fontSize="16px">{data.number}</Text>
                <Text fontSize="14px">{data.name}</Text>
                <Text fontSize="12px">{data.validate}</Text>
              </View>
              {icon && icon}
            </ViewInformation>
        }
      </Content>
    </Container>
  );
}

export default Card;