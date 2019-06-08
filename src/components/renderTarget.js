import {NavButton} from "./common/buttons";
import {Board} from "./board/board";
import React from "react";
import {JoinCard} from "./common/card";

export function RenderTarget(props) {
    if (props.view === 'splash') {
        return (
            <JoinCard>
                <NavButton onClick={props.routeLobby}> Play! </NavButton>
            </JoinCard>
        );

    } else {
        return (
            <Board url="wss://u0saflhbt3.execute-api.us-east-1.amazonaws.com/test" boardId="testId"
                   name="user"/>);
    }
}
