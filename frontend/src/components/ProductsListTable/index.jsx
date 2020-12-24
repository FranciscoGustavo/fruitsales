import { ProductRow } from '../index';
import { ContainerCSS, TableContainerCSS, TableCSS, CellCSS } from './styles';
import { RowCSS } from '../ProductRow/styles';

const ProductsListTable = ({ products, handleEdit }) => {

  const handleClick = (id) => {
    alert(id);
    handleEdit(true);
  }
  return (
    <ContainerCSS>
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
    </ContainerCSS>
  );
}

export default ProductsListTable;