import {Centered} from "./pageRoot";
import {NavButton} from "./buttons";
import React from "react";

export class Render extends React.Component {
    constructor(props) {
        super(props);
        this.routeLobby = this.routeLobby.bind(this);
        this.state = {view: this.props.view}
    }

    routeLobby() {
        console.log('called')
        this.setState({
            view: 'lobby'
        });
    }

    render() {
        console.log(this.state.view)
        if (this.state.view === 'splash') {
            return (
                <Centered>
                    <NavButton onClick={this.routeLobby}> Play! </NavButton>
                </Centered>
            );

        } else {
            return (<Centered><NavButton>THIS IS THE LOBBY!</NavButton></Centered>);
        }
    }
};
