import {NavButton} from "./common/buttons";
import React from "react";
import {Wrapper} from "./common/nav";
import {RenderTarget} from "./renderTarget";
import {Card} from "./common/card";
import {BG} from "./common/pageRoot";
import {GlobalStyle} from "./common/globalStyle";


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
            <BG>
                <Wrapper>
                    <NavButton onClick={this.routeSplash}> Back </NavButton>
                </Wrapper>
                <Card>
                    <RenderTarget view={this.state.view} routeLobby={this.routeLobby}/>
                </Card>
            </BG>
        );
    }
}




