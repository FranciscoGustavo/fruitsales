import { useQuery, useMutation } from '@apollo/client';
import { LayoutDashboard, Table, EditButton, ModalPage, EditProduct, ContainerBoard } from '../../components';
import { ALL_PRODUCTS, UPDATE_PRODUCT, CREATE_PRODUCT } from '../../graphql';
import { useHandleData } from '../../hooks';

const schemaProduct = { 
  cover: '',
  id: '',
  name: '',
  price: 0.00,
  unity: 'kg' 
};

const ProductsPage = () => {
  const { loading, error, data } = useQuery(ALL_PRODUCTS);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const { 
    modal, 
    data: product,
    handleOpen,
    handleClose,
    handleChange,
    handleNew
  } = useHandleData(schemaProduct);

  const handleSave = (product) => {
    if (product.id === '') {
      createProduct({ variables: {
        product: {
          name: product.name,
          price: Number(product.price),
          unity: product.unity,
          cover: ''
        }
      }})
      .then(() => {
        handleClose();
      })
      .catch(err => {
        console.log(err);
      })
    } else {
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
      <ContainerBoard
        handleNew={handleNew}
      >
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
      </ContainerBoard>
    </LayoutDashboard>
  );
}

export default ProductsPage;