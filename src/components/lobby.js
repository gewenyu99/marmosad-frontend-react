import React from 'react';
import {LobbyCard} from "./common/card";
import {Tabs} from "./common/tabs";
import rp from "request-promise-native";
import {Form} from "./common/form/form";
import {Input} from "./common/form/input";
import {FormButton} from "./common/buttons";


export function Lobby(props) {
    return (
        <LobbyCard>
            <Tabs headerText="Lobby" tabs={['Join', 'Create']}>
                <Form handleSubmit={(form)=>{}} submitionName={"Join"} className={"join"}>
                    <Input type={'text'} name={'nickname'}/>
                    <Input type={'text'} name={'invite code'}/>
                </Form>
                
                <Form handleSubmit={(form)=>{}} submitionName={"Create"} className={"create"}>
                    <Input type={'text'} name={'nickname'}/>
                    <Input type={'number'} name={3}/>
                </Form>
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
