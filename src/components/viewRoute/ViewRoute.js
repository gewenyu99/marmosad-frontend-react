import React from 'react';
import {Centered} from "../common/pageRoot";
import {useViewsProvider} from "./ViewsContext";

export function ViewRoute() {
    const [view, setView] = useViewsProvider();
    return (
        <Centered>
            {view}
        </Centered>
    )
}