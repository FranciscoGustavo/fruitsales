import styled from 'styled-components';

export const HeaderCSS = styled.header`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 14px;
padding: 40px;

@media screen and (min-width: 900px) {
  padding-left: 0;
  padding-right: 0;
  grid-template-columns: repeat(12, 1fr);
}
`;

export const MenuCSS = styled.nav`
grid-column: 1 / 5;
display: flex;
justify-content: space-between;
align-items: center;

@media screen and (min-width: 900px) {
  grid-column: 3 / 11;
}
`;

export const ContactCSS = styled.button`
position: relative;
padding: 0 2px 3px 2px;
background-color: transparent;
font-size: 16px;
font-weight: bold;
letter-spacing: 1px;
cursor: pointer;
color: ${props => props.theme.primary};

&:hover::after {
  width: 100%;
}

&::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  display: block;
  width: 0%;
  height: 2px;
  background-color: ${props => props.theme.primary};
  transition: width 0.2s;
}
`;

export const LogoCSS = styled.div`
display: flex;
justify-content: center;
align-items: center;

img {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}

h1 {
  font-size: 21px;
  font-weight: bold;
  font-style: italic;
  letter-spacing: 1px;
  color: ${props => props.theme.primary};
}

@media screen and (min-width: 900px) {
  img {
    width: 40px;
    height: 40px;
  }

  h1 {
    font-size: 28px;
  }
}
`;