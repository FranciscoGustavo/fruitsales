import { useQuery } from '@apollo/client';
import { Header, Card, ProductsList, Description, Footer } from '../components';
import { ALL_PRODUCTS } from '../graphql';

export const getStaticProps = async () => {
  // const { loading, error, data } = useQuery(ALL_PRODUCTS);
  return { props: {} };
} 

const Home = () => {
  return (
    <main>
      <Header />
      <Description />
      <ProductsList
        data={[1,2,3,4,5,6,7,8,9,10,11,12]}
        render={(n, idx) => (
          <Card key={idx} />
        )}
      />
      <Footer />
    </main>
  );
}

export default Home;
