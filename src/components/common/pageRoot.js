import styled from 'styled-components'
import img from '../../asset/background.svg'

export const BG = styled.div`
    background: url(${img});
    color: white;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
`;


export const Centered = styled.main`
    overflow: hidden;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
 `;
