import styled from "styled-components";

export const Card = styled.div`
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  border-radius: 5px;
  flex: 1;
`

export const JoinCard = styled(Card)`
  width: 500px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: white;
`

