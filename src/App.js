import React from 'react';
import './App.css';
import {BG} from "./components/common/pageRoot";
import {Render} from "./components/render";
import {GlobalStyle} from "./components/common/globalStyle";

function App() {
    return (
        <BG>
            <GlobalStyle heading/>
            <Render view="lobby"/>
        </BG>
    );
}


export default App;
