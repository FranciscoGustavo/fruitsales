import { InputText } from '../index';
import { ContainerCSS, EditCSS } from './styles';

const EditProduct = ({ isOpen, close }) => {
  if (!isOpen) return null;
  return (
    <ContainerCSS>
      <EditCSS>
        <h3>Editar producto</h3>
        <div>
          <img src="" alt=""/>
        </div>
        <div>
          <InputText
            type="text"
            label="Nombre"
          />
          <div className="row">
            <InputText
              type="number"
              label="Precio"
            />
            <InputText
              type="select"
              label="Unidad"
              options={["pz", "kg"]}
            />
          </div>
        </div>
        <div>
          <button>Guardar</button>
          <button onClick={close}>Cancelar</button>
        </div>
      </EditCSS>
    </ContainerCSS>
  ); 
}

export default EditProduct;
