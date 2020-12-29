import styled from 'styled-components';

export const ContainerCSS = styled.main`
background-color: rgba(${({ theme }) => theme.hexToRgba(theme.secondary, 0.07)});
`;