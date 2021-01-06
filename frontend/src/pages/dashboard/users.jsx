import { useQuery } from '@apollo/client';
import { LayoutDashboard, Table, EditButton, ModalPage, FormUser, ContainerBoard } from '../../components';
import { ALL_USERS } from '../../graphql';
import { useHandleData } from '../../hooks';

const schemaUser = {
  id: '',
  username: '',
};

const UsersPage = () => {
  const { loading, error, data } = useQuery(ALL_USERS);
  const { 
    modal, 
    data: user,
    handleOpen,
    handleClose,
    handleChange,
    handleNew
  } = useHandleData(schemaUser);

  const handleSave = (user) => {
    if (user.id === '') {
      alert('CREANDO');
    } else {
      alert('ACTUALIZANDO')
    }
    console.log(user);
    handleClose();
  }

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
      <ContainerBoard
        handleNew={handleNew}
      >
        { error ? <h1>Ups! algo salió mal</h1> : null }
        { loading ? <h1>Cargando...</h1> : null }
        { !error && !loading ? <Table  handleColumns={columns} handleData={data.users} /> : null }
        <ModalPage isOpen={modal}>
          <FormUser 
            user={user}
            close={handleClose}
            save={handleSave}
            handleChange={handleChange}
          />
        </ModalPage>
      </ContainerBoard>
    </LayoutDashboard>
  );
}

export default UsersPage;