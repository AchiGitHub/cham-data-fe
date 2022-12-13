import React from "react";
import { FaEdit, FaRetweet, FaTrash } from "react-icons/fa";

import CommonIcon from "../Common/CommonIcon";

import {
  ActionContainer,
  InPlayer,
  ItemCardWrapper,
  OutPlayer,
  PlayerContainer,
  Timer,
  TimerContainer,
} from "./styles";

const ItemCard = ({ data, setDeletePlayer }) => {
  return (
    <ItemCardWrapper>
      <TimerContainer>
        <CommonIcon
          icon={{
            icon: <FaRetweet color="green" />,
          }}
        />
        <Timer>{data.swapTime}</Timer>
      </TimerContainer>
      <PlayerContainer>
        <InPlayer>
          <b>In:</b> {data.newPlayer}
        </InPlayer>
        <OutPlayer>
          <b>Out:</b> {data.oldPlayer}
        </OutPlayer>
      </PlayerContainer>
      <ActionContainer>
        <CommonIcon
          icon={{
            icon: (
              <FaEdit
                color="#0770e3"
                style={{
                  width: "20px",
                }}
              />
            ),
          }}
        />
        <CommonIcon
          icon={{
            icon: (
              <FaTrash
                color="gray"
                style={{
                  width: "18px",
                  cursor: 'pointer'
                }}
                onClick={() => setDeletePlayer(data)}
              />
            ),
          }}
        />
      </ActionContainer>
    </ItemCardWrapper>
  );
};

export default ItemCard;
