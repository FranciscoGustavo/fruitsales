import { ProductRow } from '../index';
import { ContainerCSS, TableContainerCSS, TableCSS, CellCSS } from './styles';
import { RowCSS } from '../ProductRow/styles';

const ProductsListTable = ({ products, handleNew, handleEdit }) => {

  const handleClick = (id) => handleEdit(id);
  return (
    <ContainerCSS>
      <button onClick={handleNew}>Nuevo</button>
      <TableContainerCSS>
        <TableCSS>
          <thead>
            <RowCSS>
              <CellCSS>Nombre</CellCSS>
              <CellCSS>Precio</CellCSS>
              <CellCSS>Unidad</CellCSS>
              <CellCSS />
            </RowCSS>
          </thead>
          <tbody>
            {
              products.map(({ id, cover, name, price, unity }) => (
                <ProductRow
                  key={id}
                  id={id}
                  cover={cover}
                  name={name}
                  price={price}
                  unity={unity}
                  handleClick={handleClick}
                />
              ))
            }
          </tbody>
        </TableCSS>
      </TableContainerCSS>
    </ContainerCSS>
  );
}

export default ProductsListTable;