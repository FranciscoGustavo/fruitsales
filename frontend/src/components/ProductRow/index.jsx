import { RowCSS, CellCSS, ButtonCSS, TitleImgCSS } from './styles';

const ProductRow = ({ id, cover, name, price, unity, handleClick }) => {
  return (
    <RowCSS>
      <CellCSS>
        <TitleImgCSS>
          <img src={cover} alt={name}/>
          <p>{name}</p>
        </TitleImgCSS>
      </CellCSS>
      <CellCSS>{price}</CellCSS>
      <CellCSS>{unity}</CellCSS>
      <CellCSS>
        <ButtonCSS onClick={() => handleClick(id)}>Editar</ButtonCSS>
      </CellCSS>
    </RowCSS>
  );
}

export default ProductRow;