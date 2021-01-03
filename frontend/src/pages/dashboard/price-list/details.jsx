import Link from 'next/link';
import { LayoutDashboard, Table } from '../../../components';


const PriceListPage = () => {

  const columns = [
    { Header: 'Producto', accessor: 'name' },
    { 
      Header: 'Precio',
      accessor: 'price',
      Cell: ({ value }) => <input type="text" value={value}/>
    },
  ];

  const data = [
    {
      name: 'PAPA BLANCA GRANDE',
      price: 25.05,
    },
    {
      name: 'PERA VERDE',
      price: 25.05,
    },
    {
      name: 'MANZANA ROJA',
      price: 25.05,
    }
  ];

  return (
    <LayoutDashboard>
      <Table handleColumns={columns} handleData={data}/>
    </LayoutDashboard>
  );
}

export default PriceListPage;