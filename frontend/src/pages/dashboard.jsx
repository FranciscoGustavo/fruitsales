import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { ProductsListTable, LayoutDashboard, EditProduct } from '../components';
import { ALL_PRODUCTS, UPDATE_PRODUCT, CREATE_PRODUCT } from '../graphql';



const Dashboard = () => {
  const { loading, error, data } = useQuery(ALL_PRODUCTS);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [editProduct, setEditProduct] = useState(false);
  const [product, setProduct] = useState();

  const handleNew = () => {
    setProduct({
      id: null,
      name: '',
      cover: '',
      price: 0.00,
      unity: 'kg'
    });
    setEditProduct(true);
  }

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
    if (!product.id) {
      alert('Creando...');
      createProduct({ variables: {
        product: {
          name: product.name,
          cover: product.cover,
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
      return;
    }
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
        handleNew={handleNew}
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