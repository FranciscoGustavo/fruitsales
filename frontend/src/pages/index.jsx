import { useQuery } from '@apollo/client';
import { HomePage } from '../components';
import { ALL_PRODUCTS } from '../graphql';

export const getStaticProps = async () => {
  // const { loading, error, data } = useQuery(ALL_PRODUCTS);
  return { props: {} };
} 

const Home = () => {
  return (
    <HomePage />
  );
}

export default Home;
