import React, {useState} from "react";
import {Socket} from "./socket";
import {BlackCard, BoardCard, ChatCard, PlayAreaCard, ScoreCard, WhiteCard} from "../common/card";
import styled from "styled-components";
import {Container} from "../drag/container";
import {useView} from "../common/viewRoute/ViewHook";
import {DebugModal} from "../debug";
import {Input} from "../common/form/input";
import {Form} from "../common/form/form";
import {Chat} from "../chat";

export function Board(props) {
    let [socket, ] = useState(() => {
        const initialState = new Socket(props.url, props.boardId, props.name);
        return initialState;
    });

    const [dragged, setDragged] = useState(null);
    const [fromContainer, setFromContainer] = useState(null);
    const [submissions, setSubmissions] = useState([<BlackCard>Lorem</BlackCard>]);
    const [hand, setHand] = useState([<WhiteCard>Lorem</WhiteCard>, <WhiteCard>Ipsum</WhiteCard>]);

    function addSubmission(item) {
        let temp = submissions;
        temp.push(item);
        setSubmissions(temp)
    }

    function addHand(item) {
        let temp = hand;
        temp.push(item);
        setHand(temp)
    }
    // attempt to always properly close socket
    React.useEffect(() => {
        window.addEventListener('beforeunload', () => {
            this.state.socket.leave();
        });
    });
    // joins board on connection
    // TODO implement actual logic here, if we choose to do it here :')
    React.useEffect(() => {
        console.log(dragged);
    }, [dragged]);
    let onDragOver = (e) => {
        let event = e;
        event.stopPropagation();
        event.preventDefault();
    };

    return (
        <BoardCard>
            <ChatScoreDiv>
                <ScoreCard>
                    <CardHead>Score Board</CardHead>

                </ScoreCard>
                <SpacerDiv/>
                <Chat chat={socket.chat}/>
            </ChatScoreDiv>
            <SpacerDiv/>
            <PlayAreaCard>
                <Container containerId={'submissions'} setDragged={setDragged} onDragOver={onDragOver} ondrop={(e) => {
                    console.log('drop');
                    e.preventDefault();
                    addSubmission(dragged)
                }}>
                    {submissions}
                </Container>
                <Container containerId={'hand'} setDragged={setDragged} onDragOver={onDragOver} onDrop={(e) => {
                    console.log('drop');
                    e.preventDefault();
                    addHand(dragged)
                }}>
                    {hand}
                </Container>
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
    flex-direction: column
    justify-content: stretch; 
`;
export const CardHead = styled.h2`
    padding: 10px;
    margin: 0px;
  color: #ff5b5b;
  background: #3b3e47;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  flex: 1;
  max-height: 30px;
`;
