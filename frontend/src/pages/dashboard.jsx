import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { ProductsListTable, LayoutDashboard, EditProduct } from '../components';

export const ALL_PRODUCTS_QUERY = gql`{
  products {
    id
    cover
    name
    price
    unity
  }
}`;

const Dashboard = () => {
  const { loading, error, data } = useQuery(ALL_PRODUCTS_QUERY);
  const [editProduct, setEditProduct] = useState(false);
  const [product, setProduct] = useState();
  console.log(data);
  const handleEdit = (productId) => {
    setProduct(data.products.find(({ id }) => productId === id ));
    setEditProduct(true);
  }

  const handleClose = () => {
    setEditProduct(false);
    setProduct(false);
  }

  const handleSave = (product) => {
    console.log(product);
    handleClose();
  }

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  }
  if (loading) return <h1>Cargando</h1>
  if (error) return <h1>Cargando</h1>
  return (
    <LayoutDashboard>
      <ProductsListTable
        products={data.products}
        handleEdit={handleEdit}
      />
      <EditProduct
        isOpen={editProduct}
        close={handleClose}
        save={handleSave}
        product={product}
        handleChange={handleChange}
      />
    </LayoutDashboard>
  );
}

export default Dashboard;