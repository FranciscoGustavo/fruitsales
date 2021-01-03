import { useState, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { LayoutDashboard, Table, EditButton } from '../../components';
import { ALL_USERS } from '../../graphql';

const UsersPage = () => {
  const { loading, error, data } = useQuery(ALL_USERS);
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState();

  const handleEdit = (uuid) => {
    alert(`Editando ${uuid}`);
    setUser(data.users.find(({ id }) => uuid === id));
  }

  const columns = useMemo(
    () => [
      {
        Header: 'Nombre',
        accessor: 'username'
      },
      {
        accessor: 'id',
        Cell: ({ value }) => <EditButton uuid={value} handleEdit={handleEdit} />
      }
    ],
    []
  );

  return (
    <LayoutDashboard>
      { error ? <h1>Ups! algo salió mal</h1> : null }
      { loading ? <h1>Cargando...</h1> : null }
      { !error && !loading ? <Table columns={columns} data={data.users} /> : null }
    </LayoutDashboard>
  );
}

export default UsersPage;