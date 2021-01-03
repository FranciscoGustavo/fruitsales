import { useQuery } from '@apollo/client';
import { LayoutDashboard, Table, EditButton } from '../../components';
import { ALL_USERS } from '../../graphql';
import { useHandleData } from '../../hooks';

const UsersPage = () => {
  const { loading, error, data } = useQuery(ALL_USERS);
  const { 
    modal, 
    data: user,
    handleOpen,
    handleClose,
    handleChange
  } = useHandleData();

  const columns = [
    {
      Header: 'Nombre',
      accessor: 'username'
    },
    {
      id: 'edit',
      Cell: ({ row }) => <EditButton data={row.original} handleEdit={handleOpen} />
    }
  ];

  return (
    <LayoutDashboard>
      { error ? <h1>Ups! algo salió mal</h1> : null }
      { loading ? <h1>Cargando...</h1> : null }
      { !error && !loading ? <Table  handleColumns={columns} handleData={data.users} /> : null }
    </LayoutDashboard>
  );
}

export default UsersPage;