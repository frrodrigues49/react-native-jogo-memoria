import { FontAwesome5 } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  position: relative;
`;
export const ImageContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
  border-radius: 20px;

  position: relative;
  border: ${(props) =>
    props.flip ? "solid 1px orange" : "dashed 3px #2e3545"};
  transform: ${(props) => (props.flip ? "rotateY(180deg)" : "")};
`;
export const ImageCard = styled(FontAwesome5)`
  padding: 30px;
  position: absolute;
  background-color: #202737;
  border-radius: 20px;
`;
export const ImageCardFace = styled(ImageCard)`
  transform: rotateY(180deg);
`;
