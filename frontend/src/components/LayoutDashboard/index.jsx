import { ContainerCSS, HeaderCSS, NavCSS, MainCSS } from './styles';

const LayoutDashboard = ({children}) => {
  return (
    <ContainerCSS>
      <HeaderCSS>
        HEADER
      </HeaderCSS>
      <NavCSS>
        Navegación
      </NavCSS>
      <MainCSS>
        {children}
      </MainCSS>
    </ContainerCSS>
  );
}

export default LayoutDashboard;

