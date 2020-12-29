import styled from 'styled-components';

export const CardCSS = styled.div`
display: grid;
grid-template-columns: 40px 1fr;
gap: 14px;
border-radius: 14px;
padding: 14px;
box-shadow: 0 0 14px rgba(0, 0, 0, 0.14);
background-color: #FFF;

img {
  width: 40px;
  height: 40px;
}
`;

export const InfoCSS = styled.div`
h3 {
  margin-bottom: 10px;
  font-weight: bold;
}
p {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.7);
}
`;