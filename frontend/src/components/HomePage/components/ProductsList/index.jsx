import { ContainerCSS, ProductsCSS, ListCSS } from './styles';
 
const ProductsList = ({ data, render }) => (
  <ContainerCSS>
    <ProductsCSS>
      <h2>Menu</h2>
      <ListCSS>
        {data.map(render)}
      </ListCSS>
    </ProductsCSS>
  </ContainerCSS>
);

export default ProductsList;
