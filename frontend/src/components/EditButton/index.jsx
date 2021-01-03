const EditButton = ({ uuid, handleEdit }) => {
  return (
    <button onClick={() => handleEdit(uuid)}>Editar</button>
  );
}

export default EditButton;