import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import ActionBar from "../components/ActionBar";
import Feed from "../components/Feed";
import { PlayerContext } from "../context/Players";
import { getAllCards } from "../api/PlayerCards";

const Home = () => {

  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    const resp = await getAllCards();

    if (resp.data) {
      setCards(resp.data);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const handleAddPlayerCard = (player) => {
    const updatedCards = [...cards, player];
    setCards(updatedCards);
  }

  const deletePlayerCard = (cardId) => {
    const allCards = cards.filter((item) => item.playerCardId !== cardId);
    setCards(allCards);
  }

  return (
    <>
      <PlayerContext.Provider value={{ players: cards, addPlayer: handleAddPlayerCard, deletePlayer: deletePlayerCard }} >
        <Header />
        <main style={{ marginTop: "70px" }}>
          <ActionBar />

          <Feed />
        </main>
      </PlayerContext.Provider>
    </>
  );
};

export default Home;
