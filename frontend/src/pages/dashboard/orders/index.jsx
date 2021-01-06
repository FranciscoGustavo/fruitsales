import Link from 'next/link';
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client';
import { LayoutDashboard, Table, ContainerBoard } from '../../../components';
import { ALL_ORDERS } from '../../../graphql';

const OrdersPage = () => {
  const router = useRouter();
  const { loading, error, data } = useQuery(ALL_ORDERS);

  const columns = [
    { Header: 'Cliente', accessor: 'client' },
    { Header: 'Articulos', accessor: 'totalProducts' },
    { Header: 'Precio total', accessor: 'totalPrice' },
    { Header: 'Descripción', accessor: 'description' },
    { accessor: 'id', Cell: ({ value }) => (<Link href={`/dashboard/orders/${value}`}><a>Ver</a></Link>)}
  ];

  const handleNew = () =>  router.push('/dashboard/orders/new');

  return (
    <LayoutDashboard>
      <ContainerBoard
        handleNew={handleNew}
      >
        { error ? <h1>Ups! algo salió mal</h1> : null }
        { loading ? <h1>Cargando...</h1> : null }
        { !error && !loading ? <Table  handleColumns={columns} handleData={data.orders} /> : null }
      </ContainerBoard>
    </LayoutDashboard>
  );
}

export default OrdersPage;