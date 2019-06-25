import {ChatCard} from "./common/card";
import {CardHead} from "./board/board";
import React, {useState} from "react";
import {ChatInput} from "./common/form/input";

export function Chat(props) {
    const chat = props.chat;
    const [input, setInput] = useState();

    return (
        <ChatCard>
            <CardHead>Chat</CardHead>

            <ChatInput type={'text'} value={input} onChange={e => {
                chat(e.target.value)
            }}/>
        </ChatCard>
    )
}