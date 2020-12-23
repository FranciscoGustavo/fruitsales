import { ProductRow } from '../index';
import { TableContainerCSS, TableCSS, CellCSS } from './styles';
import { RowCSS } from '../ProductRow/styles';

const ProductsListTable = ({ products }) => {

  const handleClick = (id) => {
    alert(id);
  }
  return (
    <TableContainerCSS>
      <TableCSS>
        <thead>
          <RowCSS>
            <CellCSS>Nombre</CellCSS>
            <CellCSS>Precio</CellCSS>
            <CellCSS />
            <CellCSS />
          </RowCSS>
        </thead>
        <tbody>
          {
            products.map(({ id, name, price, unity }) => (
              <ProductRow
                key={id}
                id={id}
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
  );
}

export default ProductsListTable;