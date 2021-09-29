import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View``;
export const ContainerNameUser = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TextFont = styled.Text`
  color: #d7dded;
`;
export const SuccessText = styled(TextFont)`
  font-size: 25px;
`;
export const SuccessTextRound = styled(TextFont)`
  font-size: 13px;
  margin-top: 10px;
`;
export const TextName = styled(TextFont)`
  font-size: 22px;
  font-weight: bold;
`;
export const ButtonRanking = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 1px solid #48536c;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  elevation: 2;
`;
export const ContainerCard = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin: 20px 0 20px 0;
`;
export const Round = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #48536c;
  font-weight: bold;
`;
export const TextFormat = styled.Text`
  color: #48536c;
`;
export const ButtonPlayAgain = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5bc274;
  font-weight: bold;
  border: none;
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
`;
export const Input = styled.TextInput`
  width: 100%;
  border-radius: 4px;
  border: 1px solid #48536c;
  padding: 5px;
  background-color: #fff;
`;
export const ButtonPlayAgainModal = styled(ButtonPlayAgain)`
  width: 100%;
`;
export const ButtonSave = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5bc274;
  margin-top: 20px;
  font-weight: bold;
  border: none;
  padding: 10px;
  border-radius: 10px;
`;
export const ContainerRanking = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #48536c;
`;
export const ColRanking = styled.View`
  margin-top: 10px;
`;
