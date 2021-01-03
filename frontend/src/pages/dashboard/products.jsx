import { useQuery, useMutation } from '@apollo/client';
import { LayoutDashboard, Table, EditButton, ModalPage, EditProduct } from '../../components';
import { ALL_PRODUCTS, UPDATE_PRODUCT } from '../../graphql';
import { useHandleData } from '../../hooks';

const ProductsPage = () => {
  const { loading, error, data } = useQuery(ALL_PRODUCTS);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const { 
    modal, 
    data: product,
    handleOpen,
    handleClose,
    handleChange
  } = useHandleData();

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

  const columns = [
    { Header: 'Nombre', accessor: 'name' },
    { Header: 'Precio', accessor: 'price' },
    { Header: 'Unidad', accessor: 'unity' },
    { 
      id: 'edit',
      Cell: ({ row }) => {
        return <EditButton data={row.original} handleEdit={handleOpen} />
      }
    },
  ];

  return (
    <LayoutDashboard>
      { error ? <h1>Ups! algo salió mal</h1> : null }
      { loading ? <h1>Cargando...</h1> : null }
      { !error && !loading ? <Table handleColumns={columns} handleData={data.products} /> : null }
      <ModalPage isOpen={modal}>
        <EditProduct
          close={handleClose}
          save={handleSave}
          product={product}
          handleChange={handleChange}
        />
      </ModalPage>
    </LayoutDashboard>
  );
}

export default ProductsPage;