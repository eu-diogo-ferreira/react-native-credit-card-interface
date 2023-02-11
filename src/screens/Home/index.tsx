import React, { useState } from "react";
import { Animated } from "react-native";

import { Card, Input } from "../../components";

import { getBrand } from "../../components/Input/brand";

import IconUser from "../../assets/icon-user.svg";
import IconCode from "../../assets/icon-code.svg";
import IconDate from "../../assets/icon-date.svg";
import IconNumber from "../../assets/icon-number.svg";

import { ScrollView, Container, Header, Title, Subtitle, Content, View, Button, TextButton } from "./styles";

const Home = () => {
  const [widthAnimated, setWidthAnimated] = useState(new Animated.Value(310));
  const [isBackCardView, setBackCardView] = useState(false);
  const [icon, setIcon] = useState({
    icon: false
  });
  const [data, setData] = useState({
    name: '',
    number: '',
    validate: '',
    cvv: ''
  });

  const animatedCard = (isBack: boolean) => {
    if(isBack && !isBackCardView) {
      Animated.timing(widthAnimated, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false
      }).start();

      setTimeout(() => {
        Animated.timing(widthAnimated, {
          toValue: 310,
          duration: 200,
          useNativeDriver: false
        }).start();

        setBackCardView(true);  
      }, 200);
    }

    if(!isBack && isBackCardView) {
      Animated.timing(widthAnimated, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false
      }).start();

      setTimeout(() => {
        Animated.timing(widthAnimated, {
          toValue: 310,
          duration: 200,
          useNativeDriver: false
        }).start();
        
        setBackCardView(false);
      }, 200);
    }
  }

  return (
    <ScrollView>
      <Container>
        <Header>
          <Title>Meu Cartão</Title>
          <Subtitle>Insira os dados do cartão</Subtitle>
        </Header>

        <Content>
          <Animated.View style={{ width: widthAnimated }}>
            <Card data={data} back={isBackCardView} icon={icon?.icon}/>
          </Animated.View>

          <Input
            placeholder="Nome do titular"
            value={data.name}
            type="text"
            mask={false}
            options=""
            onChangeText={(text) => {
              setData({ ...data, name: text });
              animatedCard(false);
            }}
            icon={<IconUser fill="#6a1b9a" width={16} height={16}/>}
            width="100%"
          />
          <Input
            placeholder="Número do cartão"
            value={data.number}
            type="credit-card"
            mask={true}
            options=""
            onChangeText={(text) => {
              setData({ ...data, number: text });
              setIcon(getBrand(text));
              animatedCard(false);
            }}
            icon={<IconNumber fill="#6a1b9a" width={16} height={16}/>}
            width="100%"
          />
          
          <View>
            <Input
              placeholder="Validade"
              value={data.validate}
              type="custom"
              mask={true}
              options={{
                mask: '99/99'
              }}
              onChangeText={(text) => {
                setData({ ...data, validate: text });
                animatedCard(false);
              }}
              icon={<IconDate fill="#6a1b9a" width={16} height={16}/>}
              width="45%"
            />
            <Input
              placeholder="CVV"
              value={data.cvv}
              type="custom"
              mask={true}
              options={{
                mask: '9999'
              }}
              onChangeText={(text) => {
                setData({ ...data, cvv: text });
                animatedCard(true);
              }}
              icon={<IconCode fill="#6a1b9a" width={16} height={16}/>}
              width="45%"
            />
          </View>
        </Content>

        <Button>
          <TextButton>Cadastrar</TextButton>
        </Button>
      </Container>
    </ScrollView>
  );
}

export default Home;