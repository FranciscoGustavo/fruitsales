import { InputTextCSS, LabelCSS } from './styles';

const InputText = ({ type, label, name, value, options = false, handleChange }) => {
  const renderOptions = () => {
    if (options) 
      return options.map((option) => {
        console.log(`${option} ${value} ${option === value}`);
        if (option === value) {
          return <option key={option} value={option}>{option}</option>
        }
        return <option key={option} value={option}>{option}</option>
      });
      return null;
  }

  const renderSelect = () => {
    return (
      <select id={name} name={name} onChange={handleChange} value={value}>
        {renderOptions()}
      </select>
    );
  }

  return (
    <InputTextCSS>
      <LabelCSS htmlFor={name}>{label}</LabelCSS>
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