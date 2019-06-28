import React, {useState} from "react";
import {Socket} from "./socket";
import {BoardCard, CardHead, PlayAreaCard, ScoreCard} from "../common/card";
import styled from "styled-components";
import {DebugModal} from "../debug";
import {Chat} from "../chat";

export function Board(props) {
    let [socket,] = useState(() => {
        const initialState = new Socket(props.url, props.boardId, props.name);
        return initialState;
    });

    // attempt to always properly close socket
    React.useEffect(() => {
        window.addEventListener('beforeunload', () => {
            this.state.socket.leave();
        });
    });

    return (
        <BoardCard>
            <ChatScoreDiv>
                <ScoreCard>
                    <CardHead>Score Board</CardHead>

                </ScoreCard>
                <SpacerDiv/>
                <Chat chat={socket.chat} handleChat={socket.handleChat}/>
            </ChatScoreDiv>
            <SpacerDiv/>
            <PlayAreaCard>
            </PlayAreaCard>
            <DebugModal socket={socket}/>
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
    flex-direction: column;
    justify-content: stretch; 
`;

