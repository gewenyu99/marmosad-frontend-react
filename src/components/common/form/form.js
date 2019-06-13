import React from "react";
import {FormButton} from "../buttons";
import {Input} from "./input";
import styled from "styled-components";

export function Form(props) {

    const [formVal, setFormVal] = React.useState(props.children.map((input) => {
        return input.props.name
    }));

    function handleChange(e, i) {
        e.preventDefault();
        const values = [...formVal];
        const target = e.target;
        console.log(formVal);
        values[i] = (target.type === 'checkbox' ? target.checked : target.value);
        setFormVal(values);

    }

    return (
        <FormDiv>
            {
                props.children.map((input, index) => {
                    const {name, value, ...passProp} = input.props;
                    return <Input value={formVal[index]} name={name} {...passProp} onChange={e => {
                        handleChange(e, index)
                    }}/>;
                })
            }


            <FormButton onClick={() => {
                props.handleSubmit()
            }} show> Join </FormButton>
        </FormDiv>
    )
}

const FormDiv = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;                 
`

//
// tabs() {
//         return {
//             'join': (
//                 <React.Fragment>
//                     <Input type="text" placeholder="Invitation Code" maxlength='36'
//                            value={this.state.joinForm.boardId}
//                            onChange={(e) => {
//                                this.handleChange(e, 'joinForm', 'boardId')
//                            }}/>
//                     <Input type="text" placeholder="Your Name" maxlength='14' value={this.state.joinForm.name}
//                            onChange={(e) => {
//                                this.handleChange(e, 'joinForm', 'name')
//                            }}/>
//                     <FormButton onClick={() => {
//                         this.props.routeBoard(this.state.joinForm.boardId, this.state.joinForm.name)
//                     }}>Join</FormButton>
//                 </React.Fragment>
//             ),
//             'create': (
//                 <React.Fragment>
//                     <Input type="text" placeholder="Board Name" maxlength='30' value={this.state.createForm.boardName}
//                            onChange={(e) => {
//                                this.handleChange(e, 'createForm', 'boardName')
//                            }}/>
//                     <Input type="number" placeholder="Party Size" max='6' min='3'
//                            value={this.state.createForm.playerLimit}
//                            onChange={(e) => {
//                                this.handleChange(e, 'createForm', 'playerLimit')
//                            }}/>
//                     <Input type="text" placeholder="Your Name" max='6' min='3'
//                            value={this.state.createForm.name}
//                            onChange={(e) => {
//                                this.handleChange(e, 'createForm', 'name')
//                            }}/>
//                     <FormButton onClick={async () => {
//                         const board = await createBoard({
//                             "name": this.state.createForm.boardName,
//                             "playerLimit": this.state.createForm.playerLimit
//                         });
//                         this.props.routeBoard(board['body']['boardId'], this.state.createForm.name);
//                     }}>Create</FormButton>
//                 </React.Fragment>
//             )
//         }
//     };
