import React from 'react';
import {Centered} from "../pageRoot";
import {DefaultViewContext, useView} from "./ViewHook";


export function ViewRoute(props) {
    const defaultView = React.useContext(DefaultViewContext)
    const [curView,] = useView(defaultView);
    let views = {};
    props.views.map((item, i) => {
        views[item] = i;
    });
    return (
        <Centered>
            {props.children[views[curView]]}
        </Centered>
    )
}
