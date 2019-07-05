import {Card, CardHead} from "./common/card";
import styled from "styled-components";
import React from "react";

export function PlayArea(props) {

    return (
        <PlayAreaCard>
            <CardHead>Invite Code: {props.boardId}</CardHead>
            <DropArea>
                <BlackCard>{JSON.stringify(props.blackCard)}</BlackCard>
                {props.played.map(card=>{
                    return <WhiteCard>{JSON.stringify(card)}</WhiteCard>
                })}
            </DropArea>
            <DropArea>
                {props.hand.map(card=>{
                    return <WhiteCard>{JSON.stringify(card)}</WhiteCard>
                })}
            </DropArea>
        </PlayAreaCard>
    )
}

export const PlayAreaCard = styled(Card)`
  flex: 75;
  flex-direction: column;
`;

export const DropArea = styled(Card)`
  flex: 50;
flex-direction: row;
`;

export const WhiteCard = styled(Card)`
  flex: 1;
  background:#ff5b5b;
  min-width: 75px;
  min-height: 100px
`;

export const BlackCard = styled(Card)`
  flex: 1;
  background:#3b3e47;
  min-width: 75px
  min-height: 100px
`;