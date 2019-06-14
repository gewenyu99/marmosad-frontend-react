import styled from "styled-components";

export const Card = styled.div`
  overflow: hidden;  
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border-radius: 5px;
  flex: 1;
  user-select: none;
`;

export const LobbyCard = styled(Card)`
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);


  background: white;
  max-width: 500px;
  min-width: 200px;
  max-height: 700px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const BoardCard = styled(Card)`
  flex: 1;
  background: white;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-self: stretch;
  justify-self: stretch;
  justify-content: space-between;

`;

export const ScoreCard = styled(Card)`
      flex: 50;
      flex-grow: 50;
`;
export const ChatCard = styled(Card)`
    flex: 50;
    flex-grow: 50;
`;
export const PlayAreaCard = styled(Card)`
  flex: 75;
  flex-grow: 75;
`;

export const WhiteCard = styled(Card)`
  flex: 1;
  background:#ff5b5b;
    min-width: 75px
  min-height: 100px
`;

export const BlackCard = styled(Card)`
  flex: 1;
  background:#3b3e47;
  min-width: 75px
  min-height: 100px
`;
