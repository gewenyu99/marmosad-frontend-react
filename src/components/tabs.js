import styled from "styled-components";

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

`
export const TabHead = styled.h2`
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

export function TabBody(props) {
    return props.tabs[props.selector];
}
