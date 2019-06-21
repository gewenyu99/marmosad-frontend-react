import {Button} from "./common/buttons";
import React, {useContext, createContext} from "react";
import styled from "styled-components";

export const DebugModal = (props) => {
    const handleClose = () => {
        // props.setDebugModal(false);
    };

    // useEffect(() => {
    //     console.log(debugModal)
    // }, [debugModal]);

    return (
        <Modal show={useContext(DebugContext)}>
            <section className="modal-main">
                {props.children}
                <Button onClick={handleClose}>close</Button>
            </section>
        </Modal>
    );
};


export const Modal = styled(Button)`
    position:fixed;
    background: white;
    width: 60%;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    visibility: 
    display: ${props => props.show ? 'block' : 'none'}
    visibility: ${props => props.show ? 'visible' : 'hidden'}
`;


export const DebugContext = createContext();
