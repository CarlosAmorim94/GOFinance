import React from "react";
import { Container, Header, Icon, Photo, User, UserGreeting, UserInfo, UserName, UserWrapper } from "./styles";

export const Dashboard = () => {
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
      
    </Container>
  )
}