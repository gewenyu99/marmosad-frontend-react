import React from "react";
import {NavBar} from "./common/nav/nav";
import {RenderTarget} from "./renderTarget";
import {BG, Centered} from "./common/pageRoot";
import goose from "../asset/goose.svg"
import {NavIcon} from "./common/nav/navIcon";
import {NavTag} from "./common/nav/navTag";
import {NavText} from "./common/nav/navTexxt";
import {NavButton} from "./common/buttons";


export class Render extends React.Component {
    constructor(props) {
        super(props);
        this.routeLobby = this.routeLobby.bind(this);
        this.routeSplash = this.routeSplash.bind(this);
        this.ifDisplayBack = this.ifDisplayBack.bind(this);
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

    ifDisplayBack(v) {
        if(v !== 'splash') {
            return <NavButton onClick={this.routeSplash}> Back </NavButton>
        }
    }


    render() {
        return (
            <BG>
                <NavBar class="navBar">
                    <NavTag>
                        <NavText>Marmosad</NavText><NavIcon src={goose} class="goose-icon" alt="goose-img"/>
                    </NavTag>
                    {this.ifDisplayBack(this.state.view)}
                </NavBar>
                <Centered>
                    <RenderTarget view={this.state.view} routeLobby={this.routeLobby}/>
                </Centered>
            </BG>
        );
    }
}




