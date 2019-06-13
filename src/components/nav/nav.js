import styled from "styled-components";
import React from "react";
import {NavButton} from "../common/buttons";
import {NavTag} from "./navTag";
import {NavText} from "./navText";
import {DefaultViewContext, useView} from "../common/viewRoute/ViewHook";
import goose from '../../asset/goose.svg'
import {NavIcon} from "./navIcon";

export const NavBar = styled.nav`
    min-height: 40px;
    max-height: 80px;
    
    padding: 5px 10px 5px 10px;
    
    width: 100%;
    background: #3b3e47;
    flex: 1;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-shadow: 10px 10px 16px -13px rgba(0,0,0,0.75);

`;


export const Nav = () => {
    const defaultView = React.useContext(DefaultViewContext);

    const [curView, setView] = useView(defaultView);
    return (
        <NavBar className="navBar">
            <NavTag>
                <NavText>Marmosad</NavText> <NavIcon src={goose} className="goose-icon" alt="goose-img"/>
            </NavTag>
            <NavButton onClick={() => {
                setView('lobby')
            }} show={curView !== 'lobby'}> Back </NavButton>
        </NavBar>
    )
};
