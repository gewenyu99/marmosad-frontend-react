import {Card, CardHead} from "./common/card";
import styled from "styled-components";
import React from "react";
import {ActionButton, Button} from "./common/buttons";

export function PlayArea(props) {

    return (
        <PlayAreaCard>
            <CardHead>Invite Code: {props.boardId}</CardHead>
            <DropArea>
                <BlackCard>{JSON.stringify(props.blackCard)}</BlackCard>
                {props.played.map(card => {
                    return <WhiteCard>{JSON.stringify(card)}</WhiteCard>
                })}
            </DropArea>
            <DropArea>
                {props.hand.map(card => {
                    return <WhiteCard>{JSON.stringify(card)}</WhiteCard>
                })}
            </DropArea>
            <div>
                <ActionButton show onClick={props.start}>Start</ActionButton>
                <ActionButton show onClick={props.nudge}>Nudge</ActionButton>
            </div>
        </PlayAreaCard>
    )
}

export const PlayAreaCard = styled(Card)`
  display: flex;
  flex: 75;
  flex-direction: column;
  justify-content: stretch;
`;

export const DropArea = styled(Card)`
  display: flex;
  justify-content: start;
  flex: 50;
  flex-direction: row;
  border: 0;
  border-radius: 0;
  box-shadow: none;
`;

export const BlackCard = styled(Card)`
  flex: 1;
  background:#3b3e47;
  min-width: 75px;
  min-height: 100px;

  margin: 5px;
`;

export const WhiteCard = styled(Card)`
  flex: 1;
  background:#ff5b5b;
  min-width: 75px;
  min-height: 100px;
 
  margin: 5px;
`;
