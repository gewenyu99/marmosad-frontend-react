import styled from "styled-components";
import React from "react";
import {NavButton} from "../common/buttons";
import {NavTag} from "./navTag";
import {NavText} from "./navTexxt";
import {useViewsProvider} from "../viewRoute/ViewsContext";
import goose from '../../asset/goose.svg'
import {NavIcon} from "./navIcon";

export const NavBar = styled.nav`
    min-height: 40px;
    max-height: 80px;
    
    padding: 5px 10px 5px 10px;
    
    width: 100%;
    box-shadow: rgba(75, 86, 99, 0.094) 0px 8px 16px;
    background: #3b3e47;
    flex: 1;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;


export const Nav = () => {
    const [, setView, currentView] = useViewsProvider();
    return (
        <NavBar class="navBar">
            <NavTag>
                <NavText>Marmosad</NavText><NavIcon src={goose} className="goose-icon" alt="goose-img"/>
            </NavTag>
            <NavButton onClick={() => {
                setView('lobby')
            }} show={currentView !== 'lobby'}> Back </NavButton>
        </NavBar>
    )
};
