import styled from 'styled-components';

export const ContainerCSS = styled.div`
position: absolute;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.28);
overflow: hidden;
`;

export const ContainerFormCSS = styled.div`
width: 50%;
border-radius: 14px;
padding: 42px 28px;
background-color: #FFF;
`;

const ModalPage = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <ContainerCSS>
      <ContainerFormCSS>
        {children}
      </ContainerFormCSS>
    </ContainerCSS>
  );
}

export default ModalPage;