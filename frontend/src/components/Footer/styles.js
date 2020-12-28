import styled from 'styled-components';
import { hexToRgb } from '../../utils';
export const FooterCSS = styled.footer`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 14px;
padding: 40px;
background-color: rgba(${hexToRgb('#2A4858')}, 1);
> div {
  grid-column: 1 / 5;
}

@media screen and (min-width: 900px) {           
  grid-template-columns: repeat(12, 1fr);
  padding-left: 0;
  padding-right: 0;

  > div {
    grid-column: 3 / 11;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
`;
