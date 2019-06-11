import React from 'react';
import {LobbyCard} from "./common/card";
import {Input} from "./common/input";
import {FormButton} from "./common/buttons";
import {Header, TabBody, TabHead, TabHeadContainer, Tabs} from "./tabs";
import rp from "request-promise-native";
// @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
// font-family: 'Open Sans', sans-serif;  font-size: 12px;

export class Lobby extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'join',
            joinForm: {
                "boardId": '',
                "name": ''
            },
            createForm: {
                "playerLimit": '',
                "boardName": '',
                "name": ''
            }
        };
        this.select = this.select.bind(this);
        this.tabs = this.tabs.bind(this);
    }

    select(tab, e) {
        this.setState({
            tab: tab
        });
    }

    //TODO: Handle form values properly (remove special char, remove space, check format etc.)
    handleChange(event, form, field) {
        this.setState({[form]: {[field]: event.target.value}});
        console.log(this.state)
    }

    tabs() {
        return {
            'join': (
                <React.Fragment>
                    <Input type="text" placeholder="Invitation Code" maxlength='36'
                           value={this.state.joinForm.boardId}
                           onChange={(e) => {
                               this.handleChange(e, 'joinForm', 'boardId')
                           }}/>
                    <Input type="text" placeholder="Your Name" maxlength='14' value={this.state.joinForm.name}
                           onChange={(e) => {
                               this.handleChange(e, 'joinForm', 'name')
                           }}/>
                    <FormButton onClick={() => {
                        this.props.routeBoard(this.state.joinForm.boardId, this.state.joinForm.name)
                    }}>Join</FormButton>
                </React.Fragment>
            ),
            'create': (
                <React.Fragment>
                    <Input type="text" placeholder="Board Name" maxlength='30' value={this.state.createForm.boardName}
                           onChange={(e) => {
                               this.handleChange(e, 'createForm', 'boardName')
                           }}/>
                    <Input type="number" placeholder="Party Size" max='6' min='3'
                           value={this.state.createForm.playerLimit}
                           onChange={(e) => {
                               this.handleChange(e, 'createForm', 'playerLimit')
                           }}/>
                    <Input type="text" placeholder="Your Name" max='6' min='3'
                           value={this.state.createForm.name}
                           onChange={(e) => {
                               this.handleChange(e, 'createForm', 'name')
                           }}/>
                    <FormButton onClick={async () => {
                        const board = await createBoard({
                            "name": this.state.createForm.boardName,
                            "playerLimit": this.state.createForm.playerLimit
                        });
                        this.props.routeBoard(board['body']['boardId'], this.state.createForm.name);
                    }}>Create</FormButton>
                </React.Fragment>
            )
        }
    };

    render() {
        return (
            <LobbyCard>
                {/*<Header>Lobby</Header>*/}
                {/*<TabHeadContainer>*/}
                {/*    <TabHead selected={(this.state.tab === 'join')} tab='join'*/}
                {/*             onClick={(e) => {*/}
                {/*                 this.select('join', e)*/}
                {/*             }}>Join</TabHead>*/}
                {/*    <TabHead selected={(this.state.tab === 'create')} tab='create'*/}
                {/*             onClick={(e) => {*/}
                {/*                 this.select('create', e)*/}
                {/*             }}>Create</TabHead>*/}
                {/*</TabHeadContainer>*/}
                {/*<TabBody tabs={this.tabs()} selector={(this.state.tab)}/>*/}

                <Tabs headerText = "nice one bob" tabs={['un', 'deux']}>
                    <h1>1</h1>
                    <h1>2</h1>
                </Tabs>

            </LobbyCard>
        )
    }
}

const createBoard = async (form) => {
    return rp({
        method: 'POST',
        uri: 'https://27hbrxz5f0.execute-api.us-east-1.amazonaws.com/prod/createBoard',
        body: form,
        json: true, // Automatically stringifies the body to JSON
        headers: {
            'Content-Type': "application/json"
        }
    })
};
