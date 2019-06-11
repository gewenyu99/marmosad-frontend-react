import React from "react";
import {Socket} from "./socket";
import {BoardCard, ChatCard, PlayAreaCard, ScoreCard} from "../common/card";
import styled from "styled-components";

export class Board extends React.Component {
    constructor(props) {
        super(props);
        let socket = new Socket(this.props.url, this.props.boardId, this.props.name);
        this.state = {
            socket: socket,
            connection: socket.connection()
        };
    }

    componentDidMount() {
        window.addEventListener('beforeunload', () => {
            this.state.socket.leave();
        });
    }

    componentWillUnmount() {
        console.log('huehue');
        this.state.socket.leave();
    }

    render() {
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
