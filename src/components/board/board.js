import React from "react";
import {Socket} from "./socket";

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
        return <p> this is the board </p>
    }
}