import { HeaderCSS, MenuCSS, ContactCSS,LogoCSS } from './styles';

const Header = () => (
  <HeaderCSS>
    <MenuCSS>  
      <LogoCSS>
        <img src="/logo.svg" alt="vegyfresh logo" />
        <h1>VegyFresh</h1>
      </LogoCSS>
      <ContactCSS>Contáctanos</ContactCSS>
    </MenuCSS>
  </HeaderCSS>
);

export default Header;
