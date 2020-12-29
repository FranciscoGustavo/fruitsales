import styled from 'styled-components';

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

export const CellCSS = styled.td`
padding: 12px 24px;
white-space: nowrap;
`;

export const ButtonCSS = styled.button`
padding: 7px 14px;
background-color: transparent;
text-decoration: underline;
cursor: pointer;
`;

export const TitleImgCSS = styled.div`
display: flex;
align-items: center;
> img {
  width: 40px;
  height: 40px;
  margin-right: 14px;
}
`;