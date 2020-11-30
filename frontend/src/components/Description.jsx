import { themelight } from '../themes';

const Description = () => (
  <div className="container">
    <div className="wrapper">
      <div className="description">
        <h2>Proveedor de frutas y verduras</h2>
        <p>Haz tu pedido antes de las 0 horas y recibelo el dia siguiente despues de las 9:00AM</p>
        <button className="button-list">
          Productos
        </button>
      </div>
      <div className="main-image">
        <img src="/fruits.svg" alt="" />
      </div>
    </div>
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 14px;
        padding: 90px 40px;
      }

      .wrapper {
        grid-column: 1 / 5;
      }

      .description {
        margin-bottom: 50px;
      }

      .description h2 {
        margin-bottom: 10px;
        font-size: 28px;
        letter-spacing: 1px;
        color: ${themelight.primary}
      }

      .description p {
        margin-bottom: 50px;
        font-size: 16px;
      }

      .button-list {
        border-radius: 10px;
        padding: 10px 20px;
        background-color: ${themelight.secondary};
        font-size: 16px;
        color: #FFF;
        cursor: pointer;
      }

      .main-image img {
        width: 100%;
      }

      @media screen and (min-width: 900px) {
        .container {
          grid-template-columns: repeat(12, 1fr);
          padding-left: 0;
          padding-right: 0;
        }

        .wrapper {
          grid-column: 3 / 11;
          display: flex;
          justify-content: space-between;
        }

        .description {
          width: 45%;
          margin-bottom: 0px;
        }

        .main-image {
          width: 45%;
        }
      } 
    `}</style>
  </div>
);

export default Description;
