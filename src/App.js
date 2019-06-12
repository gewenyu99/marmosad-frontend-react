import React from 'react';
import './App.css';
import {BG} from "./components/common/pageRoot";
import {GlobalStyle} from "./components/common/globalStyle";
import {ViewRoute} from "./components/common/viewRoute/ViewRoute";
import {Lobby} from "./components/lobby";
import {Board} from "./components/board/board";
import {Nav} from "./components/nav/nav";


function App() {

    return (
        <BG>
            <GlobalStyle heading/>
            <Nav/>
            <ViewRoute default={'lobby'} views = {['lobby', 'board']}>
                <Lobby/>
                <Board/>
            </ViewRoute>
        </BG>
    );
}


export default App;
