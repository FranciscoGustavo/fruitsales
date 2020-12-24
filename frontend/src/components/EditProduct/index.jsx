import { InputText } from '../index';
import { ContainerCSS, EditCSS, RowCSS, ButtonCSS } from './styles';

const EditProduct = ({ isOpen, close, save }) => {
  if (!isOpen) return null;
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
            />
            <InputText
              type="select"
              label="Unidad"
              options={["pz", "kg"]}
            />
          </RowCSS>
        </div>
        <RowCSS>
          <ButtonCSS onClick={save}>Guardar</ButtonCSS>
          <ButtonCSS onClick={close}>Cancelar</ButtonCSS>
        </RowCSS>
      </EditCSS>
    </ContainerCSS>
  ); 
}

export default EditProduct;
