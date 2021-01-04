import styled from 'styled-components';

export const HeaderCSS = styled.div`
padding: 14px;
background-color: #FFF;
> button {
  margin-right: 14px;
}
`;

export const ContainerCSS = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 28px;
margin-bottom: 28px;
`;

export const BoxCSS = styled.div`
border-radius: 14px;
padding: 14px;
background-color: #FFF;
box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);

&:first-child {
  margin-bottom: 14px;
}

> input {
  display: block;
  width: 100%;
}
`;

export const InfoCSS = styled.p`
display: grid;
grid-template-columns: 1fr 100px;
gap: 7px;
width: 50%;
margin-left: 50%;

> span:first-child {
  text-align: right;
}

> span:last-child {
  text-align: left;
}
`;