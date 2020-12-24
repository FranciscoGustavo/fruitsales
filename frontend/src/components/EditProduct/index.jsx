import { InputText } from '../index';
import { ContainerCSS, EditCSS, RowCSS, ButtonCSS } from './styles';

const EditProduct = ({ isOpen, close, save, product, handleChange }) => {
  const handleSave = () => save(product);
  
  if (!isOpen || !product) return null;
  return (
    <ContainerCSS>
      <EditCSS>
        <h3>Editar producto</h3>
        <div>
          <img src="" alt=""/>
        </div>
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
        <RowCSS>
          <ButtonCSS onClick={handleSave}>Guardar</ButtonCSS>
          <ButtonCSS onClick={close}>Cancelar</ButtonCSS>
        </RowCSS>
      </EditCSS>
    </ContainerCSS>
  ); 
}

export default EditProduct;
