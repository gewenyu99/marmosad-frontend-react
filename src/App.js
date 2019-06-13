import React from 'react';
import './App.css';
import {BG} from "./components/common/pageRoot";
import {GlobalStyle} from "./components/common/globalStyle";
import {ViewRoute} from "./components/common/viewRoute/ViewRoute";
import {Lobby} from "./components/lobby";
import {Board} from "./components/board/board";
import {Nav} from "./components/nav/nav";
import {DefaultViewContext} from "./components/common/viewRoute/ViewHook";


function App() {

    return (
        <BG>
            <DefaultViewContext.Provider value={'lobby'}>
            <GlobalStyle heading/>
            <Nav/>
                <ViewRoute views={['lobby', 'board']}>
                    <Lobby/>
                    <Board/>
                </ViewRoute>
            </DefaultViewContext.Provider>
        </BG>
    );
}


export default App;
