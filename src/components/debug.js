import {ActionButton} from "./common/buttons";
import React, {createContext, useContext, useState} from "react";
import styled from "styled-components";
import {BoardCard} from "./common/card";
import {Input} from "./common/form/input";

export const DebugModal = (props) => {
    const handleClose = () => {
        props.setDebug(false);
    };

    const [debug, setDebug] = useState([]);

    React.useEffect(() => {
        props.socket.connection().onmessage = (e) => {
            setDebug(debug.concat([JSON.stringify(e.data)]));
        }
    });
    const [input, setInput] = useState();
    const handleSend = () => {
        props.socket.send(input);
    };
    return (
        <Modal show={useContext(DebugContext)}>
            <BoardCard>
                <section className="modal-main">
                    <ul>
                        {debug.map((val, i) => {
                            return <li key={i}>{val}</li>
                        })}
                    </ul>
                    <Input type={'text'} value={input} onChange={e => {
                        setInput(e.target.value)
                    }}/>
                    <ActionButton show onClick={handleSend}>send</ActionButton>
                    <ActionButton show onClick={handleClose}>close</ActionButton>
                </section>
            </BoardCard>

        </Modal>
    );
};


export const Modal = styled.div`
    position:fixed;
    color: #3b3e47;
    width: 60%;
    height: auto;
    top:50%;
    left:50%;
    padding: 50px;
    transform: translate(-50%,-50%);
    background: transparent;
    display: ${props => props.show ? 'block' : 'none'}
    visibility: ${props => props.show ? 'visible' : 'hidden'}
`;


export const DebugContext = createContext();
