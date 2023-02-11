import React, { ReactElement } from "react";

import { Container, Content, Strip, TextCVV, ViewInformation, View, Text } from "./styles";

interface propsCard {
  data: {
    number: string,
    name: string,
    validate: string,
    cvv: string
  },
  back: boolean,
  icon: ReactElement | boolean
}

const Card: React.FC<propsCard> = ({ data, back, icon }) => {
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
                  <Text bold={true} fontSize="16px">{data.number}{'\n'}</Text>
                  <Text fontSize="14px">{data.name}{'\n'}</Text>
                  <Text fontSize="12px">{data.validate}{'\n'}</Text>
              </View>
              {icon && icon}
            </ViewInformation>
        }
      </Content>
    </Container>
  );
}

export default Card;