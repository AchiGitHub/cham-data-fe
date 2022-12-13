import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { deleteCard } from "../../api/PlayerCards";
import { PlayerContext } from "../../context/Players";

import ItemCard from "../ItemCard";
import DeleteModal from "../Modals/Delete";

import { CardWrapper } from "./styles";

const Feed = () => {
  const [cards, setCards] = useState([]);
  const [isDeleteModalVisibile, setIsDeleteModalVisibility] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState("");

  // Get player data from context
  const playerCards = useContext(PlayerContext);

  const setDeletePlayer = (player) => {
    setIsDeleteModalVisibility(!isDeleteModalVisibile);
    setSelectedPlayer(player)
  }

  const handleDeletePlayer = async () => {
    await deleteCard(selectedPlayer.playerCardId);
    playerCards.deletePlayer(selectedPlayer.playerCardId);
    setIsDeleteModalVisibility(false);
  }

  useEffect(() => {
    setCards(playerCards.players)
  }, [playerCards.players])


  if (cards.length > 0) {
    return (
      <>
        <CardWrapper>
          {cards.map((card) => (
            <ItemCard key={card.playerCardId} data={card} setDeletePlayer={setDeletePlayer} />
          ))}
        </CardWrapper>
        <DeleteModal 
          modalOpen={isDeleteModalVisibile} 
          setModalOpen={setIsDeleteModalVisibility} 
          playerName={selectedPlayer} 
          deleteCard={handleDeletePlayer} 
        />
      </>
    );
  }

  return (
    <CardWrapper>
      <div>No cards available</div>
    </CardWrapper>
  );
};

export default Feed;
