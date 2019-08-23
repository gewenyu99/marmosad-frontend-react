import React from 'react';
import {Centered} from "../pageRoot";


export function ViewRoute(props) {

    let views = {};
    props.views.map((item, i) => {
        views[item] = i;
    });
    return (
        <Centered>
            {props.children[views[props.curView]]}
        </Centered>
    )
}
