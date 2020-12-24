import { useState } from 'react';
import { ProductsListTable, LayoutDashboard, EditProduct } from '../components';

const Dashboard = () => {
  const [editProduct, setEditProduct] = useState(false);
  const products = [
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
  ];

  return (
    <LayoutDashboard>
      <ProductsListTable
        products={products}
        handleEdit={setEditProduct}
      />
      <EditProduct
        isOpen={editProduct}
        close={() => setEditProduct(false)}
        save={() => setEditProduct(false)}
      />
    </LayoutDashboard>
  );
}

export default Dashboard;