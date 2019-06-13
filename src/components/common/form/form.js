import React from "react";
import {FormButton} from "../buttons";
import {Input} from "./input";
import styled from "styled-components";

export function Form(props) {
    //sets default values to name
    const [formVal, setFormVal] = React.useState(props.children.map((input) => {
        return input.props.type === 'number' ? parseInt(input.props.name) : input.props.name
    }));

    //resets default values when switching between forms. This is only useful when using within the tabs.
    React.useEffect(() => {
        setFormVal(props.children.map((input) => {
            return input.props.type === 'number' ? parseInt(input.props.name) : input.props.name
        }));

    }, [props.className]);


    function handleChange(e, i) {
        e.preventDefault();
        const values = [...formVal];
        const target = e.target;
        values[i] = (target.type === 'number' ? parseInt(target.value) : target.value);
        setFormVal(values);
    }

    return (
        <FormDiv>
            {
                props.children.map((input, index) => {
                    const {name, value, ...passProp} = input.props;
                    return <Input className={props.className} value={formVal[index]}
                                  key={name} {...passProp} onChange={e => {
                        handleChange(e, index)
                    }}/>;
                })
            }


            <FormButton onClick={() => {
                let form = {};
                props.children.map((val, index) => {
                    form[val.props.formName] = formVal[index];
                });
                props.handleSubmit(form)
            }} show> {props.submitionName} </FormButton>
        </FormDiv>
    )
}

const FormDiv = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;                 
`;

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
