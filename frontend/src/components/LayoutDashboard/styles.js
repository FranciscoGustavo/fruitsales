import styled from 'styled-components';

export const ContainerCSS = styled.div`
display: grid;
grid-template-columns: 220px 1fr;
grid-template-rows: 60px 1fr;
width: 100vw;
height: 100vh;
overflow: hidden;
`;

export const HeaderCSS = styled.div`
grid-column: 1 / 3;
grid-row: 1 / 2;
box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
`;

export const NavCSS = styled.div`
grid-column: 1 / 2;
grid-row: 2 / 3;
background-color: ${props => props.theme.primary};
`;

export const MainCSS = styled.div`
grid-column: 2 / 3;
grid-row: 2 / 3;
height: 100%;
padding: 28px;
background-color: rgba(${props => props.theme.hexToRgba(props.theme.primary, 0.07)});
`;

export const NavItemCSS = styled.a`
display: block;
padding: 14px;
color: #FFF;
cursor: pointer;
`;