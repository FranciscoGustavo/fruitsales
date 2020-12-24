import { InputTextCSS } from './styles';

const InputText = ({ type, label, options = false }) => {
  const renderOptions = () => {
    if (options) 
      return options.map((option) => (
          <option value="volvo">{option}</option>
        )
      );
      return null;
  }

  const renderSelect = () => {
    return (
      <select name="cars" id="cars">
        {renderOptions()}
      </select>
    );
  }

  return (
    <InputTextCSS>
      <label htmlFor="">{label}</label>
      <div>
        {
          type === 'select'
          ? renderSelect()
          : <input type={type} />
        }
      </div>
    </InputTextCSS>
  );
}

export default InputText;