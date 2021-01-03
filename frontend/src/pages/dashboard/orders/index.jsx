import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { LayoutDashboard, Table } from '../../../components';
import { ALL_ORDERS } from '../../../graphql';

const OrdersPage = () => {
  const { loading, error, data } = useQuery(ALL_ORDERS);

  const columns = [
    { Header: 'Cliente', accessor: 'client' },
    { Header: 'Articulos', accessor: 'totalProducts' },
    { Header: 'Precio total', accessor: 'totalPrice' },
    { Header: 'Descripción', accessor: 'description' },
    { id: 'view', Cell: <Link href="/dashboard/orders/details"><a>Ver</a></Link>}
  ];

  return (
    <LayoutDashboard>
      { error ? <h1>Ups! algo salió mal</h1> : null }
      { loading ? <h1>Cargando...</h1> : null }
      { !error && !loading ? <Table  handleColumns={columns} handleData={data.orders} /> : null }
    </LayoutDashboard>
  );
}

export default OrdersPage;