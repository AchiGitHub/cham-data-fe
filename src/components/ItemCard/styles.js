import styled from "styled-components";

const ItemCardWrapper = styled.div`
  width: 80%;
  padding: 1rem;
  margin: 0.3rem 1rem;
  display: flex;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 25%;
`;

const Timer = styled.label`
  color: gray;
  font-size: 0.8rem;
`;

const PlayerContainer = styled(TimerContainer)`
  width: 60%;
`;

const ActionContainer = styled(TimerContainer)`
  width: 15%;
`;

const InPlayer = styled.div`
  margin: 0.2rem 1rem;
`;

const OutPlayer = styled(InPlayer)``;

export {
  ItemCardWrapper,
  InPlayer,
  OutPlayer,
  PlayerContainer,
  TimerContainer,
  Timer,
  ActionContainer,
};
