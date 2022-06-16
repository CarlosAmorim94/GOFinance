import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

import { Container, Header, HighlightCards, Icon, Photo, User, UserGreeting, UserInfo, UserName, UserWrapper, Transactions, Title, TransactionsList } from "./styles";

export const Dashboard = () => {

  const data = [
    {
    title: "Desenvolvimento de sites",
    amount: "R$ 14.000,00",
    category: {
      name: "vendas",
      icon: "dollar-sign",
    },
    date: "13/04/2022",
    },
    {
      title: "Desenvolvimento de sites",
      amount: "R$ 14.000,00",
      category: {
        name: "vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2022",
    },
    {
      title: "Desenvolvimento de sites",
      amount: "R$ 14.000,00",
      category: {
        name: "vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2022",
    },

  ]

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>

            <Photo source={{uri: 'https://avatars.githubusercontent.com/u/83739628?v=4'}} />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Carlos</UserName>
            </User>

          </UserInfo>

          <Icon name="power" />

        </UserWrapper>

      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Ultima entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saidas"
          amount="R$ 10.600,00"
          lastTransaction="Ultima Saida dia 14 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 6.800,00"
          lastTransaction="13 a 14 de abril"
        />
        
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={data}
          renderItem={({ item })=> <TransactionCard data={item} /> }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace()
          }}
        />

        
              
      </Transactions>
      
    </Container>
  )
}