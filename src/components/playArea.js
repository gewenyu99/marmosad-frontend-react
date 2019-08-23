import {BoardCard, Card, CardHead} from "./common/card";
import styled from "styled-components";
import React, {useState} from "react";
import {ActionButton} from "./common/buttons";
import {Modal} from "./common/popupModal";

export function PlayArea(props) {
    const [draggedCard, setDraggedCard] = useState(null);
    const [showInviteCode, setShowInviteCode] = useState(false);
    let handleDrag = (e, card) => {
        setDraggedCard(card)
    };

    let handleDrop = (e) => {
        if (draggedCard && props.canPlay)
            props.submit(draggedCard);
        setDraggedCard(null);
        e.preventDefault();
        e.stopPropagation();
    };
    return (
        <PlayAreaCard>
            <CardHead>Played</CardHead>
            <DropArea onDrop={handleDrop} onDragOver={e => {
                e.preventDefault();
                e.stopPropagation();
            }}>
                <BlackCard>
                    <p>{props.blackCard.body}</p>
                    {props.blackCard.cardId}
                    {props.blackCard.cardPack}
                </BlackCard>
                {props.played.map(card => {
                    return (
                        <WhiteCard show={!(card.noDisplay)}>
                            <p>{card.body}</p>
                            {card.cardId}
                            {card.cardPack}
                        </WhiteCard>
                    )
                })}
            </DropArea>
            <CardHead>Hand</CardHead>
            <DropArea>
                {props.hand.map((card) => {
                    return (
                        <WhiteCard show key={card.key} draggable="true" onDragStart={
                            e => {
                                e.dataTransfer.setData("text", null);
                                handleDrag(e, card)
                            }}>
                            <p>{card.body}</p>
                            {card.cardId}
                            {card.cardPack}
                        </WhiteCard>
                    )
                })}
            </DropArea>
            <ButtonArea>
                <ActionButton show onClick={props.start}>Start</ActionButton>
                <ActionButton show onClick={props.nudge}>Nudge</ActionButton>
                <ActionButton show onClick={(e) => {
                    setShowInviteCode(true)
                }}>Invite Code</ActionButton>
            </ButtonArea>
            <InviteModal show={showInviteCode} set={setShowInviteCode} code={props.boardId}/>
        </PlayAreaCard>
    )
}


const InviteModal = (props) => {
    let handleClose = () => {
        props.set(false);
    };

    return (
        <Modal show={props.show}>
            <BoardCard>
                <Selectable>Invite Code: {props.code}</Selectable>
                <ActionButton show onClick={handleClose}>close</ActionButton>
            </BoardCard>
        </Modal>
    );
};

export const ButtonArea = styled.div`
 justify-content: stretch;
 display: flex;
 flex-direction: row;
`;

export const Selectable = styled.div`
  -webkit-user-select: text; /* Safari 3.1+ */
  -moz-user-select: text; /* Firefox 2+ */
  -ms-user-select: text; /* IE 10+ */
  user-select: text; /* Standard syntax */
`;

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
  visibility: ${props => props.show ? 'visible' : 'hidden'}
`;
