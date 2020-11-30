import { themelight } from '../themes';
 
const ProductsList = ({ data, render }) => (
  <div className="container">
    <div className="products">
      <h2 className="title">Productos</h2>
      <div>
        Puedes ver una lista de nuestros productos
      </div>
      <div className="list">
        {
          data.map(render)
        }
      </div>
    </div>
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 14px;
        padding: 90px 40px;
        /* background-color: ${themelight.secondary}; */
      }

      .products {
        grid-column: 1 / 5;
      }

      .title {
        font-size: 28px;
        margin-bottom: 50px;
      }

      .list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
      }

      @media screen and (min-width: 900px) {
        .container {
          grid-template-columns: repeat(12, 1fr);
          padding-left: 0;
          padding-right: 0;
        }

        .products {
          grid-column: 3 / 11;
        }

        .list {
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
      }
/*
      .products h2 {
        grid-column: 1 / 5;
        text-align: center;
        font-size: 28px;
      }

      .list {
        display: inherit;
        grid-template-columns: inherit;
        grid-column: 1 / 5;
        gap: 56px 14px;
      }

      .list div {
        background-color: #FFF;
      }

      @media screen and (min-width: 900px) {
        .container {
          grid-template-columns: repeat(12, 1fr);
        }
        .products {
          grid-template-columns: repeat(12, 1fr);
        }

        .products h2 {
          grid-column: 1 / 13;
          margin-bottom: 90px;
        }

        
        .list {
          grid-template-columns: repeat(4, 1fr);
          grid-column: 3 / 11;
        }

      }*/
    `}</style>
  </div>
);

export default ProductsList;
