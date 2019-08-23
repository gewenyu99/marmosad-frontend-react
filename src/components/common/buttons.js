import styled from 'styled-components'

export const Button = styled.button`
    
    @import url('https://fonts.googleapis.com/css?family=KoHo:200|Kodchasan:200&display=swap');
    font-family: 'Kodchasan', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

    padding: 0.25em 1em;
    border: none;
    -webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;
    cursor: pointer;
    visibility: ${props => props.show ? 'visible' : 'hidden'}
`;

export const NavButton = styled(Button)`
    margin: 20px;
    font-size: 20px;
    background: #ff5b5b;
    color: #3b3e47;
    border-radius: 2px;
    :hover {
        background: grey;
        color: white;
    }
`;
export const ActionButton = styled(Button)`
      padding: 10px;
      margin: 10px;
      font-size: 18px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      background: #ff5b5b;
      color: white;
      border-radius: 3px;
      max-height: 40px;
      flex: 1;
      :hover {
        background: grey;
        color: white;
      }
`;
