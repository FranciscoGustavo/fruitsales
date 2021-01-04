import { Header, Card, ProductsList, Description, Footer } from './components';
import { ContainerCSS } from './styles';

const HomePage = ({ products }) => {
  return (
    <ContainerCSS>
      <Header />
      <Description />
      <ProductsList
        data={products}
        render={({ id, name, cover, price }) => (
          <Card
            key={id}
            name={name}
            cover={cover}
            price={price}
          />
        )}
      />
      <Footer />
    </ContainerCSS>
  );
}

export default HomePage;