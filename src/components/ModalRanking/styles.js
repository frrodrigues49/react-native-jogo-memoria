import styled from "styled-components";

export const ModalContainer = styled.View`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const Container = styled.View`
  display: flex;
  flex-direction: row;
  background-color: #202737;
  width: 100%;
  height: 60%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
export const ContainerModal = styled.View`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 20px;
`;
export const BannerRigth = styled.View`
  border-top-left-radius: 20px;
  width: 30px;
  height: 100%;
  background-color: #c97b51;
`;
export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.Text`
  color: #cdcdd3;
  elevation: 5;
`;
export const CloseButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c97b51;
  border-radius: 5px;
  width: 25px;
  height: 25px;
`;
export const CloseButtonText = styled.Text`
  color: #cdcdd3;
`;
export const Content = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  height: 100%;
`;
