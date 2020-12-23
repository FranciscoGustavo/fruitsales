import { ProductsListTable } from '../components';

const Dashboard = () => {
  const products = [
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
    { id: 1, name: 'Papa blanca grande', price: '14.50', unity: 'pz' },
  ];

  return (
    <>
      <header>
        HEADER
      </header>
      <nav>
        Navegación
      </nav>
      <main className="main">
        <ProductsListTable products={products} />
        <div className="edit-product">
          <div>
            <h3>Editar producto</h3>
            <div>
              <img src="" alt=""/>
            </div>
            <div>
              <InputText
                type="text"
                label="Nombre"
              />
              <div className="row">
                <InputText
                  type="number"
                  label="Precio"
                />
                <InputText
                  type="select"
                  label="Unidad"
                  options={["pz", "kg"]}
                />
              </div>
            </div>
            <div>
              <button>Guardar</button>
              <button>Cancelar</button>
            </div>
          </div>
        </div>

        <style jsx>{`
          .main {
            width: 100%;
            height: 100vh;
            padding: 28px;
            background-color: green;
          }

          .edit-product {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 0vw;
            height: 0vh;
            background-color: rgba(0, 0, 0, 0.28);
            overflow: hidden;
          }
          .edit-product > div {
            width: 50%;
            border-radius: 14px;
            padding: 14px;
            background-color: #FFF;

          }

          .edit-product > div .row {
            display: flex;
          }
        `}</style>
      </main>
    </>
  );
}

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

export default Dashboard;