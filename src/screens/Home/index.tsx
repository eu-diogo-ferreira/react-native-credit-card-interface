import React from "react";

import { Card, Input } from "../../components";

import IconUser from "../../assets/icon-user.svg";
import IconCode from "../../assets/icon-code.svg";
import IconDate from "../../assets/icon-date.svg";
import IconNumber from "../../assets/icon-number.svg";

import { Container, Header, Title, Subtitle, Content, View, Button, TextButton } from "./styles";

const Home = () => {
  return (
    <Container>
      <Header>
        <Title>Meu Cartão</Title>
        <Subtitle>Insira os dados do cartão</Subtitle>
      </Header>

      <Content>
        <Card />

        <Input
          placeholder="Nome do titular"
          icon={<IconUser fill="#6a1b9a" width={16} height={16}/>}
        />
        <Input
          placeholder="Número do cartão"
          icon={<IconNumber fill="#6a1b9a" width={16} height={16}/>}
        />
        
        <View>
          <Input
            placeholder="Validade"
            icon={<IconDate fill="#6a1b9a" width={16} height={16}/>}
            width="45%"
          />
          <Input
            placeholder="CVV"
            icon={<IconCode fill="#6a1b9a" width={16} height={16}/>}
            width="45%"
          />
        </View>
      </Content>

      <Button>
        <TextButton>Cadastrar</TextButton>
      </Button>
    </Container>
  );
}

export default Home;