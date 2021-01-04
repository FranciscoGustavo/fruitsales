import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { LayoutDashboard, Table, FormOrder } from '../../../components';
import { GET_ORDER } from '../../../graphql';

const PriceListPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_ORDER, { variables: { id } });

  const columns = [
    { Header: 'Producto', accessor: 'name' },
    { Header: 'Cantidad', accessor: 'count' },
    { Header: 'Precio', accessor: 'price' },
    { Header: 'Precio total', accessor: 'totalPrice' },
  ];

  const handleSave = (order) => {
    console.log(order);
  }

  return (
    <LayoutDashboard>
      { error ? <h1>Ups! algo salió mal</h1> : null }
      { loading ? <h1>Cargando...</h1> : null }
      { !error && !loading 
        ? <FormOrder
            columns={columns}
            order={data.order}
            handleSave={handleSave}
          /> 
        : null }
    </LayoutDashboard>
  );
}

export default PriceListPage;