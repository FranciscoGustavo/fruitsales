import { RowCSS, CellCSS, ButtonCSS } from './styles';

const ProductRow = ({ id, name, price, unity, handleClick }) => {
  return (
    <RowCSS>
      <CellCSS>{name}</CellCSS>
      <CellCSS>{price}</CellCSS>
      <CellCSS>{unity}</CellCSS>
      <CellCSS>
        <ButtonCSS onClick={() => handleClick(id)}>Editar</ButtonCSS>
      </CellCSS>
    </RowCSS>
  );
}

export default ProductRow;