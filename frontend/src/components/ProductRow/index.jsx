import { RowCSS, CellCSS } from './styles';

const ProductRow = ({ id, name, price, unity, handleClick }) => {
  return (
    <RowCSS>
      <CellCSS>{name}</CellCSS>
      <CellCSS>{price}</CellCSS>
      <CellCSS>{unity}</CellCSS>
      <CellCSS>
        <button onClick={() => handleClick(id)}>Editar</button>
      </CellCSS>
    </RowCSS>
  );
}

export default ProductRow;