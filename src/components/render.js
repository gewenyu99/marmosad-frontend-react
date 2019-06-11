import React from "react";
import {RenderTarget} from "./renderTarget";
import {BG, Centered} from "./common/pageRoot";


export class Render extends React.Component {
    constructor(props) {
        super(props);
        this.routeLobby = this.routeLobby.bind(this);
        this.routeSplash = this.routeSplash.bind(this);
        this.routeBoard = this.routeBoard.bind(this);
        this.ifDisplayBack = this.ifDisplayBack.bind(this);
        this.state = {view: this.props.view, boardId: "", name: ""}
    }

    routeLobby() {
        console.log('rendering lobby');

        this.setState({
            view: 'lobby'
        });
    }

    routeBoard(boardId, name) {
        console.log('rendering board');

        this.setState({
            view: 'board',
            boardId: boardId, name: name
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
            return {visibility: 'visible'};
        else
            return {visibility: 'hidden'};
    }


    render() {
        return (
            <BG>

                <Centered>
                    <RenderTarget view={this.state.view} routeBoard={this.routeBoard} name={this.state.name}
                                  boardId={this.state.boardId}/>
                </Centered>
            </BG>
        );
    }
}




