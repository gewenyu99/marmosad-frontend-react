import React, {Fragment} from "react";
import {FormButton} from "../buttons";
import {Input} from "../input";

export function Form(props) {
    const formMap = new Map();
    return (
        <Fragment>
            {
                props.children.map((input, index) => {
                    const [name, value, ...passProp] = input.props;
                    formMap.set(name, value);
                    <Input {...passProp} />
                })
            }
            <FormButton onClick={() => {
                props.handleSubmit()
            }}>Join</FormButton>
        </Fragment>
    )
}


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
