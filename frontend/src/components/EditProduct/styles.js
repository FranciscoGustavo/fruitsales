import styled from 'styled-components';

export const ContainerCSS = styled.div`
position: absolute;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.28);
overflow: hidden;
`;

export const EditCSS = styled.div`
width: 50%;
border-radius: 14px;
padding: 14px;
background-color: #FFF;
`;

export const RowCSS = styled.div`
display: ${props => props.display ? props.display : 'block'};
grid-template-columns: ${props => props.templateColumns ? props.templateColumns : '1fr'};
gap: ${props => props.gap ? props.gap : '0'};
margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0};
`;

export const ButtonCSS = styled.button`
border-radius: 7px;
padding: 14px;
cursor: pointer;
`;