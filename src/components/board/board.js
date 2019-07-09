import React, {useState} from "react";
import {Socket} from "./socket";
import {BoardCard, CardHead, ScoreCard} from "../common/card";
import styled from "styled-components";
import {DebugModal} from "../debug";
import {Chat} from "../chat";
import {PlayArea} from "../playArea";

export function Board(props) {
    // this bit of code for socket is lazy init, which runs once on construction but not rerender
    let [socket,] = useState(() => {
        const initialState = new Socket(props.url, props.boardId, props.name);
        return initialState;
    });

    const [hand, setHand] = useState([]);
    const [played, setplayed] = useState([]);
    const [blackCard, setBlackCard] = useState({});

    React.useEffect(() => {
        socket.connection().onmessage = (e) => {
            const update = JSON.parse(e.data);
            console.log(JSON.parse(e.data));
            if (update.gameEvent === "update") {
                const fill = 6 - update.display.whiteCards.length;
                setplayed(update.display.whiteCards.concat(new Array(fill).fill({})));


                setHand(update.hand);
                setBlackCard(update.display.blackCard);
            }
        }
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
            <PlayArea hand={hand.map((card, i) => {
                card.key = i;
                return card
            })} played={played} blackCard={blackCard} start={socket.start} nudge={socket.nudge} submit={socket.submit}
                      boardId={props.boardId}/>
            <DebugModal setDebug={props.setDebug} socket={socket}/>
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

