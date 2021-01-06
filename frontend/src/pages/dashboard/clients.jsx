import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { LayoutDashboard, Table, ContainerBoard, ModalPage, FormUser, EditButton } from '../../components';
import { ALL_CLIENTS } from '../../graphql';
import { useHandleData } from '../../hooks';

const schemaClient = {
  id: '',
  username: '',
};

const ClientsPage = () => {
  const { loading, error, data } = useQuery(ALL_CLIENTS);
  const { 
    modal, 
    data: user,
    handleOpen,
    handleClose,
    handleChange,
    handleNew
  } = useHandleData(schemaClient);

  const columns = [
    { Header: 'Nombre', accessor: 'username' },
    { 
      id: 'edit',
      Cell: ({ row }) => <EditButton data={row.original} handleEdit={handleOpen} />
    }
  ];

  const handleSave = (client) => {
    if (client.id === '') {
      alert('CREANDO');
    } else {
      alert('ACTUALIZANDO')
    }
    console.log(client);
    handleClose();
  }

  return (
    <LayoutDashboard>
      <ContainerBoard
        handleNew={handleNew}
      >
        { error ? <h1>Ups! algo salió mal</h1> : null }
        { loading ? <h1>Cargando...</h1> : null }
        { !error && !loading ? <Table  handleColumns={columns} handleData={data.clients} /> : null }
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

export default ClientsPage;