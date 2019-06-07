import {NavButton} from "./common/buttons";
import React from "react";
import {Board} from "./board/board";
import {Centered} from "./common/pageRoot";
import {Wrapper} from "./common/nav";


export class Render extends React.Component {
    constructor(props) {
        super(props);
        this.routeLobby = this.routeLobby.bind(this);
        this.routeSplash = this.routeSplash.bind(this);
        this.state = {view: this.props.view}
    }

    routeLobby() {
        console.log('rendering lobby');

        this.setState({
            view: 'lobby'
        });
    }

    routeSplash() {
        console.log('rendering splash');
        this.setState({
            view: 'splash'
        });
    }


    render() {
        return (
            <Centered>
                <Wrapper>
                    <NavButton onClick={this.routeSplash}> Back </NavButton>
                </Wrapper>
                <RenderTarget view={this.state.view} routeLobby={this.routeLobby}/>
            </Centered>
        );
    }
}

function RenderTarget(props) {
    if (props.view === 'splash') {
        return (
            <NavButton onClick={props.routeLobby}> Play! </NavButton>
        );

    } else {
        return (
            <Board url="wss://u0saflhbt3.execute-api.us-east-1.amazonaws.com/test" boardId="testId"
                   name="user"/>);
    }
}


