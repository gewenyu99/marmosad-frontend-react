import styled from "styled-components";
import React, {Fragment} from "react";

export const Header = styled.header`
  padding: 5px;
  color: #ff5b5b;
  background: #3b3e47;
  font-size: 20px;
  text-align: center;
  flex: 1;
  max-height: 30px;
`;
export const TabHeadContainer = styled.div`
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

`;
export const TabHead = styled.h2`
  font-weight: normal;

  margin: 0;
  padding: 5px;
  color: ${props => (props.selected ? '#3b3e47' : '#ff5b5b')};
  background: ${props => (props.selected ? 'white' : '#3b3e47')};
  font-size: 20px;
  text-align: center;
  flex: 1;
  max-height: 30px;
  cursor: pointer;
`;

export const TabBody = styled.div`
  margin: 0;
  padding: 5px;
  color: #3b3e47;
  background: white;
  flex: 1;
  font-size: 20px;
`;


export function Tabs(props) {
    const children = props.children;
    const [selectedTab, setSelectedTab] = React.useState(0);
    console.log(children);
    return (
        <Fragment>
            <Header>{props.headerText}</Header>
            <TabHeadContainer>
                {props.tabs.map((tab, i) => <TabHead selected={i === selectedTab} id={tab} onClick={()=>{
                    setSelectedTab(i)
                }}> {tab} </TabHead>)}
            </TabHeadContainer>
            <TabBody>
                {children[selectedTab]}
            </TabBody>
        </Fragment>
    )
};
