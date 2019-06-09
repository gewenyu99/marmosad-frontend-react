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
        this.routeBoard = this.routeBoard.bind(this);
        this.ifDisplayBack = this.ifDisplayBack.bind(this);
        this.state = {view: this.props.view}
    }

    routeLobby() {
        console.log('rendering lobby');

        this.setState({
            view: 'lobby'
        });
    }

    routeBoard() {
        console.log('rendering board');

        this.setState({
            view: 'board'
        });
    }

    routeSplash() {
        console.log('rendering splash');
        this.setState({
            view: 'splash'
        });
    }

    ifDisplayBack() {
        if (this.state.view !== 'lobby')
            return {visibility: 'visible'}
        else
            return {visibility: 'hidden'};
    }


    render() {
        return (
            <BG>
                <NavBar class="navBar">
                    <NavButton  style={{visibility: 'hidden'}}>hoho</NavButton>
                    <NavTag>
                        <NavText>Marmosad</NavText><NavIcon src={goose} className="goose-icon" alt="goose-img"/>
                    </NavTag>
                    <NavButton onClick={this.routeLobby} style={this.ifDisplayBack()}> Back </NavButton>
                </NavBar>
                <Centered>
                    <RenderTarget view={this.state.view} routeBoard={this.routeBoard}/>
                </Centered>
            </BG>
        );
    }
}




