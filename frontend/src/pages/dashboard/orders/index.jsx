import Link from 'next/link';
import { LayoutDashboard, Table } from '../../../components';


const PriceListPage = () => {

  const columns = [
    { Header: 'Cliente', accessor: 'client' },
    { Header: 'Articulos', accessor: 'total_products' },
    { Header: 'Precio total', accessor: 'total_price' },
    { Header: 'Descripción', accessor: 'description' },
    { id: 'view', Cell: <Link href="/dashboard/orders/details"><a>Ver</a></Link>}
  ];

  const data = [
    {
      client: 'COME EN CASA @ SA DE CV',
      total_price: 10563,
      total_products: 15,
      description: 'LOS CUENTOS DE CALLE BRONCA'
    },
    {
      client: 'COME EN CASA @ SA DE CV',
      total_price: 10563,
      total_products: 2,
      description: 'LOS CUENTOS DE CALLE BRONCA'
    },
    {
      client: 'COME EN CASA @ SA DE CV',
      total_price: 10563,
      total_products: 7,
      description: 'LOS CUENTOS DE CALLE BRONCA'
    }
  ];

  return (
    <LayoutDashboard>
      <Table handleColumns={columns} handleData={data}/>
    </LayoutDashboard>
  );
}

export default PriceListPage;