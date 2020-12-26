import { InputText } from '../index';
import { ContainerCSS, EditCSS, RowCSS, ButtonCSS, ImgCSS } from './styles';

const EditProduct = ({ isOpen, close, save, product, handleChange }) => {
  const handleSave = () => save(product);
  
  if (!isOpen || !product) return null;
  return (
    <ContainerCSS>
      <EditCSS>
        <RowCSS
          display="grid"
          templateColumns="150px 1fr"
          gap="28px"
        >
          <div>
            <ImgCSS src="https://www.gob.mx/cms/uploads/article/main_image/16716/papa.jpg" alt=""/>
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
      </EditCSS>
    </ContainerCSS>
  ); 
}

export default EditProduct;
