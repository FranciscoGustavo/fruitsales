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
display: grid;
grid-template-columns: 220px 1fr;
box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
z-index: 20;
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
overflow: hidden;
`;

export const NavItemCSS = styled.a`
display: block;
padding: 14px;
color: #FFF;
cursor: pointer;
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