import React from 'react';
import './App.css';
import {BG} from "./components/common/pageRoot";
import {GlobalStyle} from "./components/common/globalStyle";
import {ViewRoute} from "./components/viewRoute/ViewRoute";
import {Lobby} from "./components/lobby";
import {Board} from "./components/board/board";
import {ViewsContext} from "./components/viewRoute/ViewsContext";
import {Nav} from "./components/nav/nav";


function App() {
    const views = {
        "lobby": <Lobby/>,
        "board": <Board/>,
        "default": 'lobby'
    };
    return (
        <BG>
            <ViewsContext.Provider value={views}>
                <GlobalStyle heading/>
                <Nav/>
                <ViewRoute views={views}/>
            </ViewsContext.Provider>

        </BG>
    );
}


export default App;
