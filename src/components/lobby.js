import React from 'react';
import {LobbyCard} from "./common/card";
import {Tabs} from "./tabs";
import rp from "request-promise-native";
// @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
// font-family: 'Open Sans', sans-serif;  font-size: 12px;

export function Lobby() {


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

            <Tabs headerText="nice one bob" tabs={['un', 'deux']}>
                <div>
                    HOHOHO
                </div>
                <div>
                    HEHEHE
                </div>
            </Tabs>

        </LobbyCard>
    )
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
