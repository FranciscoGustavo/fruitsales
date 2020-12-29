import { createGlobalStyle } from 'styled-components';
import { hexToRgb } from '../utils';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  outline: none;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: normal;
}
`;
export const theme = {
  primary: '#2A4858',
  secondary: '#38A49B',
  hexToRgba: (color, opacity) => {
    return `${hexToRgb(color)}, ${opacity}`;
  }
};

export default GlobalStyles;