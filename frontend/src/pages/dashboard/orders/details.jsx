import Link from 'next/link';
import { LayoutDashboard, Table } from '../../../components';


const PriceListPage = () => {

  const columns = [
    { Header: 'Producto', accessor: 'name' },
    { Header: 'Cantidad', accessor: 'count' },
    { Header: 'Precio', accessor: 'price' },
    { Header: 'Precio total', accessor: 'total_price' },
  ];

  const data = [
    {
      name: 'PAPA BLANCA GRANDE',
      price: 15,
      total_price: 10563,
      count: 15,
    },
    {
      name: 'PAPA BLANCA GRANDE',
      price: 15,
      total_price: 10563,
      count: 2,
    },
    {
      name: 'PAPA BLANCA GRANDE',
      price: 15,
      total_price: 10563,
      count: 7,
    }
  ];

  return (
    <LayoutDashboard>
      <Table handleColumns={columns} handleData={data}/>
    </LayoutDashboard>
  );
}

export default PriceListPage;