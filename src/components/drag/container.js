import React, {useEffect} from "react";
import styled from "styled-components";

export function Container(props) {
    let items = {};

    useEffect(() => {
        props.children.map((item) => {
            items[item.props.index] = {
                'dragState': 'settled'
            };
            items[item.props.index]['dragObj'] =
                <div dragState={items[item.props.index].dragState} onDrag={() => {
                         props.setDragged(item);
                         item.props.dragState = 'started';
                         console.log("onDrag");
                     }}>item</div>
        })
    }, [props.children]);

    return <ContainerRoot> {props.children} </ContainerRoot>
}

const ContainerRoot = styled.div`
    overflow: hidden;
    flex-grow: 1;
    display: flex;
`;