import { InputTextCSS } from './styles';

const InputText = ({ type, label, name, value, options = false, handleChange }) => {
  const renderOptions = () => {
    if (options) 
      return options.map((option) => (
          <option key={option} value={option}>{option}</option>
        )
      );
      return null;
  }

  const renderSelect = () => {
    return (
      <select id={name} name={name} onChange={handleChange}>
        {renderOptions()}
      </select>
    );
  }

  return (
    <InputTextCSS>
      <label htmlFor={name}>{label}</label>
      <div>
        {
          type === 'select'
          ? renderSelect()
          : <input type={type} id={name} name={name} value={value} onChange={handleChange} />
        }
      </div>
    </InputTextCSS>
  );
}

export default InputText;