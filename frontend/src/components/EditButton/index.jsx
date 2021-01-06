import styled from 'styled-components';

const ButttonCSS = styled.button`
background-color: transparent;
text-decoration: underline;
cursor: pointer;
`;

const EditButton = ({ data, handleEdit }) => {
  return (
    <ButttonCSS onClick={() => handleEdit(data)}>Editar</ButttonCSS>
  );
}

export default EditButton;