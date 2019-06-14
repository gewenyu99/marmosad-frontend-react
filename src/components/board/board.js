import React, {useState} from "react";
import {Socket} from "./socket";
import {BlackCard, BoardCard, ChatCard, PlayAreaCard, ScoreCard, WhiteCard} from "../common/card";
import styled from "styled-components";
import {Container} from "../drag/container";

export function Board(props) {
    const [dragged, setDragged] = useState(null);
    const [fromContainer, setFromContainer] = useState(null);
    const [submissions, setSubmissions] = useState([<BlackCard>Lorem</BlackCard>]);

    function addSubmission(item) {
        let temp = submissions;
        temp.push(item);
        setSubmissions(temp)
    }

    const [hand, setHand] = useState([<WhiteCard>Lorem</WhiteCard>, <WhiteCard>Ipsum</WhiteCard>]);

    function addHand(item) {
        let temp = hand;
        temp.push(item);
        setHand(temp)
    }

    let socket = new Socket(props.url, props.boardId, props.name);

    let connection = socket.connection();
    React.useEffect(() => {
        window.addEventListener('beforeunload', () => {
            this.state.socket.leave();
        });

    });

    React.useEffect(() => {
        connection.addEventListener('open', () => {
            connection.send(JSON.stringify({'action': 'join', 'boardId': props.boardId, 'name': props.name}));
        })
    }, [connection]);

    React.useEffect(() => {
        console.log(dragged);
    }, [dragged]);
    let onDragOver = (e) => {
        let event = e;
        event.stopPropagation();
        event.preventDefault();
    }
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
