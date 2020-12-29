import { CardCSS, InfoCSS } from './styles';

const Card = ({ name, cover, price }) => (
  <CardCSS>
    <img src={cover} alt={name} />
    <InfoCSS>
      <h3>{name}</h3>
      <p>$ {price}</p>
    </InfoCSS>
  </CardCSS>
);

export default Card;
