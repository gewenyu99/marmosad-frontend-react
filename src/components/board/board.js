import React from "react";
import {Socket} from "./socket";
import {BoardCard, ChatCard, PlayAreaCard, ScoreCard} from "../common/card";
import styled from "styled-components";

export function Board(props) {
    let socket = new Socket(this.props.url, this.props.boardId, this.props.name);
    let connection = socket.connection();

    React.useEffect(()=>{
        window.addEventListener('beforeunload', () => {
            this.state.socket.leave();
        });
    });

    return (
        <BoardCard>
            <ChatScoreDiv>
                <ScoreCard>

                </ScoreCard>
                <SpacerDiv/>
                <ChatCard>

                </ChatCard>
            </ChatScoreDiv>
            <SpacerDiv/>
            <PlayAreaCard/>
        </BoardCard>
    )
}


export const ChatScoreDiv = styled.div`
    max-width: 450px;
    min-width: 250px;
    flex: 25; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const SpacerDiv = styled.div`
    max-width: 40px;
    min-width: 20px;
    max-height: 40px;
    min-height: 20px;
    background: transparent;
    flex: 1; 
`;
