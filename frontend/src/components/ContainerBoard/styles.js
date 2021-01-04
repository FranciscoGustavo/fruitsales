import styled from 'styled-components';

export const ContainerCSS = styled.div`
height: 100%;
background-color: rgba(${props => props.theme.hexToRgba(props.theme.primary, 0.07)});
`;

export const WrapperCSS = styled.div`
padding: 28px;
`;