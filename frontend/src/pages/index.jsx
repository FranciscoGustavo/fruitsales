import { Header, Card, ProductsList, Description } from '../components';

export const getStaticProps = async () => {
  return { props: {} };
} 

const Home = () => (
  <main>
    <Header />
    <Description />
    <ProductsList
      data={[1,2,3,4,5,6,7,8,9,10,11,12]}
      render={(n, idx) => (
        <Card key={idx} />
      )}
    />
    <footer className="container">
      <div className="footer">
        <div>
          <h4>¿Quieres ver la lista de productos completa? Dejanos tu correo. Te prometemos no darle tu información a nadie, ni enviar correos con información innecesaria.</h4>
          <div>
            <label htmlFor=""></label>
            <input type="text"/>
            <button>Enviar</button>
          </div>
        </div>
        <div>
          <h4>Contacto</h4>
          <p>55 67829137</p>
          <p>conatcto@vegyfresh.app</p>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          padding: 40px;
        }

        .footer {
          grid-column: 1 / 5;
        }

        @media screen and (min-width: 900px) {
          .container {
            grid-template-columns: repeat(12, 1fr);
            padding-left: 0;
            padding-right: 0;
          }

          .footer {
            grid-column: 3 / 11;
          }
        }
      `}</style>
    </footer>
  </main>
);

export default Home;
