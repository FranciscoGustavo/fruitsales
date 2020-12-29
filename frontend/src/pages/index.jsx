import { useQuery } from '@apollo/client';
import { HomePage } from '../components';
import { ALL_PRODUCTS } from '../graphql';

export const getStaticProps = async () => {
  return { props: {} };
} 

const Home = () => {
  const { loading, error, data } = useQuery(ALL_PRODUCTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <HomePage products={data.products}/>
  );
}

export default Home;
