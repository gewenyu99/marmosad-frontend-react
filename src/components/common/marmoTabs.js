import React from 'react';
import {JoinCard} from "./card";
import styled from "styled-components";

// @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
// font-family: 'Open Sans', sans-serif;  font-size: 12px;

export class MarmoTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tab: 'join'}
        this.select = this.select.bind(this);
    }

    select(prop) {
        console.log(prop)
        this.setState({tab: prop.tab})
    }

    render() {
        return (
            <JoinCard>
                <Header>Lobby</Header>
                <TabHeadContainer>
                    <TabHead selected={(this.state.tab === 'join')} tab='join'
                             onClick={this.select}>Join</TabHead>
                    <TabHead selected={(this.state.tab === 'create') } tab='create'
                             onClick={this.select}>Create</TabHead>
                </TabHeadContainer>
            </JoinCard>
        )
    }
};

const Header = styled.header`
  padding: 5px;
  color: #ff5b5b;
  background: #3b3e47;
  font-size: 20px;
  text-align: center;
  flex: 1;
  max-height: 30px;
`;

const TabHeadContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: stretch;
  
  background: #3b3e47;
  max-height: 30px;
  
  padding: 0;
  margin: 0;
  text-align: center;

`
const TabHead = styled.h2`
  font-weight: normal;

  margin: 0;
  padding: 5px;
  color: ${props => (props.selected ? '#ffffff' : '#ff5b5b')};
  background: ${props => (props.selected ? '#ff5b5b' : '#3b3e47')};
  font-size: 20px;
  text-align: center;
  flex: 1;
  max-height: 30px;
  cursor: pointer;
`;


