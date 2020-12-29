import styled from 'styled-components'; 

export const ContainerCSS = styled.div`
display: grid;
padding: 90px 40px;

@media screen and (min-width: 900px) {
  grid-template-columns: repeat(12, 1fr);
  padding-left: 0;
  padding-right: 0;
}
`;

export const ListCSS = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
gap: 28px;

@media screen and (min-width: 900px) {
  grid-template-columns: repeat(3, 1fr);
  gap: 42px;
}
`;

export const ProductsCSS = styled.div`
h2 {
  font-size: 28px;
  margin-bottom: 50px;
}
@media screen and (min-width: 900px) {
  grid-column: 3 / 11;
}
`;