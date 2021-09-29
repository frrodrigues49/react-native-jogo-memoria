import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { useImage } from "../../context/cardProvider";
import { AntDesign } from "@expo/vector-icons";
import Cards from "../../components/Cards";
import Modal from "../../components/Modal";
import ModalRanking from "../../components/ModalRanking";
import { globalStyles } from "../../styles/globalStyles";

import {
  Container,
  ContainerNameUser,
  TextFont,
  TextName,
  ButtonRanking,
  ContainerCard,
  Round,
  TextFormat,
  ButtonPlayAgain,
  SuccessText,
  SuccessTextRound,
  ButtonPlayAgainModal,
  ButtonSave,
  Input,
  ContainerRanking,
  ColRanking,
} from "./styles";

const Home = () => {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ranking, setRanking] = useState(false);
  const [rankingUsers, setRankingUsers] = useState([]);
  const { round, setRound, restartGame } = useImage();

  const handleStart = () => {
    restartGame();
    setRound(0);
  };
  const handleSuccess = () => {
    restartGame();
    setSuccess(false);
    setRound(0);
  };
  const handleClose = () => {
    if (name === "") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  const getNameUser = () => {
    if (name === "") {
      setOpen(true);
    }
  };
  const handleRanking = () => {
    setRanking(true);
    loadRankings();
  };

  const loadRankings = async () => {
    try {
      const response = await api.get("users");
      setRankingUsers(response.data);
    } catch (error) {
      console.error("Ops -", error);
    }
  };

  useEffect(() => {
    getNameUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  useEffect(() => {
    loadRankings();
  }, []);

  return (
    <>
      <Container style={globalStyles.container}>
        <ContainerNameUser>
          <TextFont>Jogador:</TextFont>
          <ButtonRanking onPress={handleRanking}>
            <AntDesign name="Trophy" size={24} color="#5bc274" />
          </ButtonRanking>
          <TextName>{name}</TextName>
        </ContainerNameUser>
        <ContainerCard>
          <Cards setSuccess={setSuccess} userName={name} />
        </ContainerCard>
        <Round>
          <TextFormat>Rodada: {round}</TextFormat>
        </Round>
        <ButtonPlayAgain
          disabled={round === 0 ? true : false}
          onPress={handleStart}
        >
          <TextFormat>Jogar Novamente</TextFormat>
        </ButtonPlayAgain>
      </Container>
      {open ? (
        <Modal title="Iniciar o jogo?">
          <Input
            placeholder="Informe o nome do Jogador!"
            value={name}
            onChangeText={setName}
          />
          <ButtonSave onPress={handleClose}>
            <TextFormat>Salvar</TextFormat>
          </ButtonSave>
        </Modal>
      ) : null}
      {success ? (
        <Modal title="Parabens" onClose={handleSuccess}>
          <SuccessText>Você venceu!</SuccessText>
          <SuccessTextRound>Rodadas: {round}</SuccessTextRound>
          <ButtonPlayAgainModal onPress={handleSuccess}>
            <TextFormat>Jogar Novamente</TextFormat>
          </ButtonPlayAgainModal>
        </Modal>
      ) : null}
      {ranking ? (
        <ModalRanking title="Ranking" onClose={() => setRanking(false)}>
          {rankingUsers &&
            rankingUsers
              .sort((a, b) => a.ranking - b.ranking)
              .slice(0, 10)
              .map((item, i) => (
                <ContainerRanking key={item.id}>
                  <ColRanking>
                    <TextFont>{item.name}</TextFont>
                  </ColRanking>
                  <ColRanking>
                    <TextFont>{item.ranking}</TextFont>
                  </ColRanking>
                </ContainerRanking>
              ))}
        </ModalRanking>
      ) : null}
    </>
  );
};

export default Home;
