import React from 'react';
import {LobbyCard} from "./common/card";
import {Tabs} from "./common/tabs";
import rp from "request-promise-native";
// @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
// font-family: 'Open Sans', sans-serif;  font-size: 12px;

export function Lobby() {
    return (
        <LobbyCard>
            <Tabs headerText="Lobby" tabs={['Join', 'Create']}>
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
