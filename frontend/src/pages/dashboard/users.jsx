import { useMemo } from 'react';
import { LayoutDashboard, Table } from '../../components';

const UsersPage = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Nombre',
        accessor: 'username'
      },
      {
        Header: 'Acciones',
        accessor: 'id',
        Cell: <h1>Editar</h1>
      }
    ],
    []
  );

  const data = useMemo(() => [
    {
      username: 'Francisco'
    },
    {
      username: 'Gustavo'
    }
  ], []);

  return (
    <LayoutDashboard>
      <Table columns={columns} data={data} />
    </LayoutDashboard>
  );
}

export default UsersPage;