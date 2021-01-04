import styled from 'styled-components';

export const ContainerCSS = styled.div`
display: grid;
grid-template-rows: 50px 1fr;
height: 100%;
overflow: hidden;
background-color: rgba(${props => props.theme.hexToRgba(props.theme.primary, 0.07)});
`;

export const WrapperCSS = styled.div`
height: 100%;
overflow-y: auto;
padding: 28px;
`;