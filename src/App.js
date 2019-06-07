import React from 'react';
import './App.css';
import {BG, Centered} from "./components/common/pageRoot";
import {Render} from "./components/render";

function App() {
    return (
        <BG>
            <Centered>
                <Render view="splash"/>
            </Centered>
        </BG>
    );
}


export default App;
