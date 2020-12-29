import { CardCSS, InfoCSS } from './styles';

const Card = () => (
  <CardCSS>
    <img src="/brocoli.svg" alt="" />
    <InfoCSS>
      <h3>Brocoli con poco pata</h3>
      <p>$ 125.00</p>
    </InfoCSS>
  </CardCSS>
);

export default Card;
