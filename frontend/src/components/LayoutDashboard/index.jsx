import Link from 'next/link';
import { ContainerCSS, HeaderCSS, NavCSS, MainCSS,NavItemCSS } from './styles';

const navItems = [
  { url: '/dashboard/orders' , label: 'Pedidos' },
  { url: '/dashboard/products' , label: 'Productos' },
  { url: '/dashboard/clients' , label: 'Clientes' },
  { url: '/dashboard/price-list' , label: 'Listas de precio' },
  { url: '/dashboard/users' , label: 'Usuarios' },
];

const LayoutDashboard = ({children}) => {
  return (
    <ContainerCSS>
      <HeaderCSS>
        HEADER
      </HeaderCSS>
      <NavCSS>
        {navItems.map(({ url, label }) => (
          <Link href={url}>
            <NavItemCSS>{label}</NavItemCSS>
          </Link>
        ))}
      </NavCSS>
      <MainCSS>
        {children}
      </MainCSS>
    </ContainerCSS>
  );
}

export default LayoutDashboard;

