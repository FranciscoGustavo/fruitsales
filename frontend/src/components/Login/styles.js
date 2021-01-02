import styled from 'styled-components';

export const ContainerCSS = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background-color: ${props => props.theme.primary};

form {
  border-radius: 14px;
  padding: 28px;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.07);
  background-color: #FFF;

  > * {
    display: block;
    width: 300px;
  }

  > input[type="text"], >  input[type="password"] {
    border-bottom: solid 1px gray;
    margin-bottom: 10px;
  }
}
`;