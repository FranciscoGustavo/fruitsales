import { HeaderCSS } from './styles';

const HeaderActions = ({ handleNew }) => {
  return (
    <HeaderCSS>
      <button onClick={handleNew}>Nuevo</button>
      <button>Imprimir</button>
      <button>Enviar por correo</button>
    </HeaderCSS>
  );
}

export default HeaderActions;