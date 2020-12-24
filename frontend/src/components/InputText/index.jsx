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
    <div className="input-text">
      <label htmlFor="">{label}</label>
      <div>
        {
          type === 'select'
          ? renderSelect()
          : <input type={type} />
        }
      </div>
      <style jsx>{`
        .input-text {
        }

        .input-text div {
          display: flex;
          border-radius: 7px;
          border: 1px solid rgba(0, 0, 0, 0.3);
          box-shadow: rgba(0, 0, 0, 0.07) 0px 0px 2px;
          overflow: hidden;
        }
        .input-text div input, .input-text div select {
          display: inline-flex;
          width: 100%;
          padding: 12px;
          outline: none;
          resize: none;
        }
      `}</style>
    </div>
  );
}

export default InputText;