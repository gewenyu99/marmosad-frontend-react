import React from 'react';
import {LobbyCard} from "./common/card";
import {Tabs} from "./common/tabs";
import {Form} from "./common/form/form";
import {Input} from "./common/form/input";
import {createBoard} from "./requests";


export function Lobby(props) {

    return (
        <LobbyCard>
            <Tabs headerText="Lobby" tabs={['Join', 'Create']}>
                <Form handleSubmit={(form) => {
                }} submitionName={"Join"} className={"join"}>
                    <Input type={'text'} name={'nickname'} formName={'name'}/>
                    <Input type={'text'} name={'invite code'} formName={'boardId'}/>
                </Form>

                <Form handleSubmit={async (form) => {
                    props.setName(form['name']);
                    const createdBoard = await createBoard(form);
                    props.setBoardId(createdBoard['body']['boardId']);
                    props.setView('board');
                    console.log('routing to ', props.curView)
                }} submitionName={"Create"} className={"create"}>
                    <Input type={'text'} name={'nickname'} formName={'name'}/>
                    <Input type={'text'} name={'card packs'} formName={'card-packs'}/>
                    <Input type={'number'} name='3' formName={'numberOfPlayers'}/>
                </Form>
            </Tabs>

        </LobbyCard>
    )
}

