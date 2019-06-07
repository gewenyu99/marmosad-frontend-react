import {NavButton} from "./common/buttons";
import React from "react";
import {Board} from "./board/board";

export class Render extends React.Component {
    constructor(props) {
        super(props);
        this.routeLobby = this.routeLobby.bind(this);
        this.state = {view: this.props.view}
    }

    routeLobby() {
        console.log('called');
        this.setState({
            view: 'lobby'
        });
    }

    render() {
        console.log(this.state.view);
        if (this.state.view === 'splash') {
            return (
                <NavButton onClick={this.routeLobby}> Play! </NavButton>
            );

        } else {
            return (<Board url="wss://u0saflhbt3.execute-api.us-east-1.amazonaws.com/test" boardId="testId"
                           name={"user"}/>);
        }
    }
}
