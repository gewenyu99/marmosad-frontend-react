import React from 'react';
import {LobbyCard} from "./common/card";
import {Tabs} from "./common/tabs";
import {Form} from "./common/form/form";
import {Input} from "./common/form/input";
import {createBoard} from "./requests";


export function Lobby(props) {
    const handleCreateBoard = async (form) => {
        props.setName(form['name']);
        form['cardPacks'] = form['cardPacks'].replace(' ', '').split(',');
        const createdBoard = await createBoard(form);
        props.setBoardId(createdBoard['body']['boardId']);
        props.setView('board');
        console.log('routing to ', props.curView)
    };

    const handleJoinBoard = (form) => {
        props.setName(form['name']);
        props.setBoardId(form['boardId']);
        props.setView('board');
        console.log('routing to ', props.curView)
    };
    return (
        <LobbyCard>
            <Tabs headerText="Lobby" tabs={['Join', 'Create']}>
                <Form handleSubmit={handleJoinBoard} submitionName={"Join"} className={"join"}>
                    <Input type={'text'} name={'nickname'} formName={'name'}/>
                    <Input type={'text'} name={'invite code'} formName={'boardId'}/>
                </Form>

                <Form handleSubmit={handleCreateBoard} submitionName={"Create"} className={"create"}>
                    <Input type={'text'} name={'nickname'} formName={'name'}/>
                    <Input type={'text'} name={'room-309, classic'} formName={'cardPacks'}/>
                    <Input type={'number'} name='3' formName={'numberOfPlayers'}/>
                </Form>
            </Tabs>

        </LobbyCard>
    )
}

