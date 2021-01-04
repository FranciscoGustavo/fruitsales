import { FooterCSS } from './styles';

const Footer = () => {
  return (
    <FooterCSS>
      <div>
        <div>
          <h4>¿Quieres ver la lista de productos completa? Dejanos tu correo. Te prometemos no darle tu información a nadie, ni enviar correos con información innecesaria.</h4>
          <div>
            <label htmlFor=""></label>
            <input type="text"/>
            <button>Enviar</button>
          </div>
        </div>
        <div>
          <h4>Contacto</h4>
          <p>55 67829137</p>
          <p>conatcto@vegyfresh.app</p>
        </div>
      </div>
    </FooterCSS>
  );
}

export default Footer;