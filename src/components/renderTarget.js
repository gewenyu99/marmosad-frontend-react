import {Board} from "./board/board";
import React from "react";
import {Lobby} from "./lobby";

export function RenderTarget(props) {
    if (props.view === 'lobby') {
        return (
            <Lobby routeBoard={props.routeBoard}/>
        );

    } else {
        return (
            <Board url="wss://u0saflhbt3.execute-api.us-east-1.amazonaws.com/test" boardId={props.boardId}
                   name={props.name}/>);
    }
}
