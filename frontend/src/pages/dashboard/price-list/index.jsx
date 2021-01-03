import Link from 'next/link';
import { LayoutDashboard, Table } from '../../../components';


const PriceListPage = () => {

  const columns = [
    { Header: 'Inicia', accessor: 'start_date' },
    { Header: 'Termina', accessor: 'end_date' },
    { Header: 'Estado', accessor: 'isActive', Cell: ({ value }) => <h1>{value ? 'Activo' : 'Desactivado'}</h1> },
    { id: 'view', Cell: <Link href="/dashboard/price-list/details"><a>Ver</a></Link>}
  ];

  const data = [
    {
      start_date: '01/diciembre/2020',
      end_date: '15/diciembre/2020',
      isActive: false
    },
    {
      start_date: '15/diciembre/2020',
      end_date: '30/diciembre/2020',
      isActive: false
    },
    {
      start_date: '01/enero/2021',
      end_date: '15/enero/2021',
      isActive: true
    }
  ];

  return (
    <LayoutDashboard>
      <Table handleColumns={columns} handleData={data}/>
    </LayoutDashboard>
  );
}

export default PriceListPage;