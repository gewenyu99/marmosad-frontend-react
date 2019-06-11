import {createContext, useContext, useState} from "react";


export const ViewsContext = createContext(null);
export const useViewsProvider = () => {
    const views = useContext(ViewsContext);
    const [view, setView] = useState(views.default);
    return [[views[view]], setView, view];
};

