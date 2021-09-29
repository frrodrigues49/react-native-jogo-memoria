import React from "react";

import {
  ModalContainer,
  Container,
  ContainerModal,
  BannerRigth,
  Header,
  Title,
  CloseButton,
  CloseButtonText,
  Content,
} from "./styles";

function ModalRanking({ title, onClose = () => {}, children }) {
  return (
    <ModalContainer>
      <Container>
        <BannerRigth />
        <ContainerModal>
          <Header>
            <Title>{title}</Title>
            <CloseButton onPress={onClose}>
              <CloseButtonText>x</CloseButtonText>
            </CloseButton>
          </Header>
          <Content>{children}</Content>
        </ContainerModal>
      </Container>
    </ModalContainer>
  );
}

export default ModalRanking;
