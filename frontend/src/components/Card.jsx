const Card = () => (
  <div className="card">
    <img src="/brocoli.svg" alt="" className="cover" />
    <h3 className="title">Brocoli con poco pata</h3>
    <p className="price">$ 125.00</p>
    <style jsx>{`
      .card {
        grid-column: span 1;
        border-radius: 10px;
        border: solid 1px gray;
        padding: 20px 10px;
        background-color: #FFF;
        text-align: center;
      }

      .cover {
        margin-bottom: 10px;
      }

      .title {
        margin-bottom: 10px;
      }

      .price {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.7);
      }

      @media screen and (min-width: 900px) {
        .card {
          grid-column: span 1;
        }
      }
    `}</style>
  </div>
);

export default Card;
