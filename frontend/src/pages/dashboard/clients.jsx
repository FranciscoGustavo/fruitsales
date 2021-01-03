import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { LayoutDashboard, Table } from '../../components';
import { ALL_CLIENTS } from '../../graphql';

const ClientsPage = () => {
  const { loading, error, data } = useQuery(ALL_CLIENTS);

  const columns = [
    { Header: 'Nombre', accessor: 'username' },
    { id: 'view', Cell: <Link href="/dashboard/orders/details"><a>Editar</a></Link>}
  ];

  return (
    <LayoutDashboard>
      { error ? <h1>Ups! algo salió mal</h1> : null }
      { loading ? <h1>Cargando...</h1> : null }
      { !error && !loading ? <Table  handleColumns={columns} handleData={data.clients} /> : null }
    </LayoutDashboard>
  );
}

export default ClientsPage;