import React from "react";
import {Socket} from "./socket";

export class Board extends React.Component {
    constructor(props) {
        super(props);
        let socket = new Socket(this.props.url);
        this.state = {
            connection: socket.connection()
        };

        this.state.connection.onopen = () => {
            socket.join(this.props.boardId, this.props.name);
        }
    }

    render() {
        return <p> this is the board </p>
    }
}