import { Header, Card, ProductsList, Description, Footer } from '../index';

const HomePage = () => {
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

export default HomePage;