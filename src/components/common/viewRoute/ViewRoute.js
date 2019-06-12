import React from 'react';
import {Centered} from "../pageRoot";
import {useView} from "./ViewHook";


export function ViewRoute(props) {
    const [curView,] = useView(props.default);
    let views = {};
    props.views.map((item, i)=>{
        views[item] = i;
    });
    return (
        <Centered>
            {props.children[views[curView]]}
        </Centered>
    )
}