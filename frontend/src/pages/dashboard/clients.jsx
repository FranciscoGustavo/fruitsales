import Link from 'next/link';
import { LayoutDashboard, Table } from '../../components';


const ClientsPage = () => {

  const columns = [
    { Header: 'Nombre', accessor: 'name' },
    { id: 'view', Cell: <Link href="/dashboard/orders/details"><a>Editar</a></Link>}
  ];

  const data = [
    {
      name: 'COME EN CASA @ SA DE CV'
    },
    {
      name: 'COME EN CASA @ SA DE CV'
    },
    {
      name: 'COME EN CASA @ SA DE CV'
    }
  ];

  return (
    <LayoutDashboard>
      <Table handleColumns={columns} handleData={data}/>
    </LayoutDashboard>
  );
}

export default ClientsPage;