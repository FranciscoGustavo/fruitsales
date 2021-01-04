import styled from 'styled-components';

export const TableContainerCSS = styled.div`
width: 100%;
border-radius: 14px;
border: solid 1px rgba(0, 0, 0, 0.14);
box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
overflow: hidden;
background-color: #FFF;
`;

export const TableCSS = styled.table`
width: 100%;
border-collapse: collapse;
`;

export const CellCSS = styled.th`
padding: 12px 24px;
white-space: nowrap;
background-color: rgba(${props => props.theme.hexToRgba(props.theme.primary, 0.8)});
color: #FFF;
text-transform: uppercase;
font-size: 15px;
font-weight: bold;
`;

export const CellBodyCSS = styled.td`
padding: 12px 24px;
white-space: nowrap;
`;

export const RowCSS = styled.tr`
border-top: solid 1px rgba(0, 0, 0, 0.14);
border-bottom: solid 1px rgba(0, 0, 0, 0.14);
font-size: 14px;
text-align: left;

&:first-child {
  border-top: 0;
}

&:last-child {
  border-bottom: 0;
}
`;