import Link from 'next/link';
import { ContainerCSS, HeaderCSS, NavCSS, MainCSS,NavItemCSS } from './styles';

const LayoutDashboard = ({children}) => {
  return (
    <ContainerCSS>
      <HeaderCSS>
        HEADER
      </HeaderCSS>
      <NavCSS>
        <Link href="/dashboard/products">
          <NavItemCSS>Productos</NavItemCSS>
        </Link>
        <Link href="/dashboard/users">
          <NavItemCSS>Usuarios</NavItemCSS>
        </Link>
        <Link href="/dashboard/price-list">
          <NavItemCSS>Listas de precio</NavItemCSS>
        </Link>
      </NavCSS>
      <MainCSS>
        {children}
      </MainCSS>
    </ContainerCSS>
  );
}

export default LayoutDashboard;

