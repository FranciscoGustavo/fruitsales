import { InputText } from '../index';

const FormUser = ({ close, save, user, handleChange }) => {
  const handleSave = () => save(user);

  return (
    <>
      <InputText
        type="text"
        label="Nombre"
        name="username"
        value={user.username}
        handleChange={handleChange}
      />
      <button onClick={handleSave}>Guardar</button>
      <button onClick={close}>Cancelar</button>
    </> 
  );
}

export default FormUser;