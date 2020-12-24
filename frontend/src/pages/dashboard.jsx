import { useState } from 'react';
import { ProductsListTable, LayoutDashboard, EditProduct } from '../components';

const Dashboard = () => {
  const [editProduct, setEditProduct] = useState(false);
  const [product, setProduct] = useState();
  const products = [
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'kg' },
    { id: 2, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 3, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 4, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 5, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 6, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 7, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 8, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 9, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 10, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 11, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 12, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 13, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
  ];

  const handleEdit = (productId) => {
    setProduct(products.find(({ id }) => productId === id ));
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

  return (
    <LayoutDashboard>
      <ProductsListTable
        products={products}
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