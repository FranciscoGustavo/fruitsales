const EditButton = ({ data, handleEdit }) => {
  return (
    <button onClick={() => handleEdit(data)}>Editar</button>
  );
}

export default EditButton;