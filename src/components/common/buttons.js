import styled from 'styled-components'

export const NavButton = styled.button`
    @import url('https://fonts.googleapis.com/css?family=KoHo:200|Kodchasan:200&display=swap');
    font-family: 'Kodchasan', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 20px;
    background: transparent;
    border: 2px solid ${props => props.theme.bg};
    color: ${props => props.theme.c};
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    background: ${props => props.theme.bg};
`;

NavButton.defaultProps = {
    theme: {
        bg: "#ff5b5b",
        c: "#3b3e47"
    }
}
