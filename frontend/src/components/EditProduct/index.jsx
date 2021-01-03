import { InputText } from '../index';
import { RowCSS, ButtonCSS, ImgCSS } from './styles';

const EditProduct = ({ close, save, product, handleChange }) => {
  const handleSave = () => save(product);

  return (
    <>
      <RowCSS
        display="grid"
        templateColumns="150px 1fr"
        gap="28px"
      >
        <div>
          <ImgCSS src={product.cover} alt=""/>
        </div>
        <div>
          <div>
            <RowCSS marginBottom="20px" >
              <InputText
                type="text"
                label="Nombre"
                name="name"
                value={product.name}
                handleChange={handleChange}
              />
            </RowCSS>
            <RowCSS
              display="grid"
              templateColumns="1fr 1fr"
              gap="28px"
              marginBottom="20px"
            >
              <InputText
                type="number"
                label="Precio"
                name="price"
                value={product.price}
                handleChange={handleChange}
              />
              <InputText
                type="select"
                label="Unidad"
                name="unity"
                value={product.unity}
                options={["pz", "kg"]}
                handleChange={handleChange}
              />
            </RowCSS>
          </div>
          <RowCSS
            display="grid"
            templateColumns="auto auto 1fr"
            gap="28px"
          >
            <ButtonCSS onClick={handleSave}>Guardar</ButtonCSS>
            <ButtonCSS onClick={close}>Cancelar</ButtonCSS>
          </RowCSS>
        </div>
      </RowCSS>
    </>
  ); 
}

export default EditProduct;
