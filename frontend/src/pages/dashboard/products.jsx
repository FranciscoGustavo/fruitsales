import { useState, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { LayoutDashboard, Table, EditButton, EditProduct } from '../../components';
import { ALL_PRODUCTS } from '../../graphql';

const ProductsPage = () => {
  const { loading, error, data } = useQuery(ALL_PRODUCTS);
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState();

  const handleEdit = (uuid) => {
    alert(`Editando ${uuid}`);
    setProduct(data.products.find(({ id }) => uuid === id));
    setModal(true);
  }

  const handleClose = () => {
    setModal(false);
    setProduct(false);
  }

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  }

  const handleSave = (product) => {
    console.log(product);
  }

  const columns = useMemo(
    () => [
      { Header: 'Nombre', accessor: 'name' },
      { Header: 'Precio', accessor: 'price' },
      { Header: 'Unidad', accessor: 'unity' },
      { 
        accessor: 'id',
        Cell: ({ value }) => <EditButton uuid={value} handleEdit={handleEdit} />
      },
    ],
    []
  );

  return (
    <LayoutDashboard>
      { error ? <h1>Ups! algo salió mal</h1> : null }
      { loading ? <h1>Cargando...</h1> : null }
      { !error && !loading ? <Table columns={columns} data={data.products} /> : null }
      <EditProduct
        isOpen={modal}
        close={handleClose}
        save={handleSave}
        product={product}
        handleChange={handleChange}
      />
    </LayoutDashboard>
  );
}

export default ProductsPage;