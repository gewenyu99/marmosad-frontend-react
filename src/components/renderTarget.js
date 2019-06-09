import {Board} from "./board/board";
import React from "react";
import {MarmoTabs} from "./common/marmoTabs";

export function RenderTarget(props) {
    if (props.view === 'lobby') {
        return (
            <MarmoTabs playButton={props.routeBoard}/>
        );

    } else {
        return (
            <Board url="wss://u0saflhbt3.execute-api.us-east-1.amazonaws.com/test" boardId="testId"
                   name="user"/>);
    }
}
