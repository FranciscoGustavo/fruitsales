import { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
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

export const UPDATE_PRODUCT = gql`
mutation updateProduct($id: ID! $product: ProductUde!) {
    updateProduct(id: $id product: $product) {
      id
      name
      price
      cover
    }
  }
`;

const Dashboard = () => {
  const { loading, error, data } = useQuery(ALL_PRODUCTS_QUERY);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
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
    updateProduct({ variables: {
      id: product.id,
      product: {
        name: product.name,
        price: Number(product.price),
        unity: product.unity
      }
    }})
    .then(() => {
      handleClose();
    })
    .catch(err => {
      console.log(err);
    })
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