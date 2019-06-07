import React from 'react';
import './App.css';
import {BG} from "./components/common/pageRoot";
import {Render} from "./components/render";

function App() {
    return (
        <BG>
            <Render view="splash"/>
        </BG>
    );
}


export default App;
