import {useState} from "react";


export const useView = (init) => {
    const [curView, setView] = useState(init || '');
    return [curView, setView];
};

