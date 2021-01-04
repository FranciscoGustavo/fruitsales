import { useState, useMemo } from 'react';
import { useTable } from 'react-table';
import { } from '../index';
import { ContainerCSS, HeaderCSS, BoxCSS, InfoCSS } from './styles';

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, // This is a custom function that we supplied to our table instance
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue)

  const onChange = e => {
    setValue(e.target.value)
  }

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    console.log(index, id, value);
    updateMyData(index, id, value)
  }

  // If the initialValue is changed external, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <input value={value} onChange={onChange} onBlur={onBlur} />
}

const defaultColumn = {
  Cell: EditableCell,
}

// Be sure to pass our updateMyData and the skipPageReset option
function Table({ columns, data, updateMyData, skipPageReset }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      // use the skipPageReset option to disable page resetting temporarily
      // autoResetPage: !skipPageReset,
      updateMyData,
    }
  )

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

const FormOrder = ({ columns, order, handleSave }) => {
  const [data, setData] = useState({ ...order, products: [...order.products, {
    'name': '',
    'count': 0,
    'price': 0,
    'totalPrice': 0
  }]});
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }
  
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setData(old => {
      return {
        ...old,
        products: old.products.map((row, index) => {
          if (index === rowIndex) {
            return {
              ...old.products[rowIndex],
              [columnId]: value,
            }
          }
          return row
        })
      }
    })
  }

  const columnsMemo = useMemo(() => columns, []);
  const dataMemo = useMemo(() => data.products, []);

  return (
    <>
      <HeaderCSS>
        <button onClick={() => handleSave(data)}>Guadar</button>
        <button>Imprimir</button>
        <button>Enviar por correo</button>
      </HeaderCSS>
      <ContainerCSS>
        <div>
          <BoxCSS>
            <input type="text" name="client" value={data.client} onChange={handleChange}/>
          </BoxCSS>
          <BoxCSS>
            <input type="text" name="description" value={data.description} onChange={handleChange}/>
          </BoxCSS>
        </div>
        <div>
          <BoxCSS>
            <InfoCSS>
              <span>Total de productos:</span>
              <span>{data.totalProducts}</span>
            </InfoCSS>
          </BoxCSS>
          <BoxCSS>
            <InfoCSS>
              <span>Precio total:</span>
              <span>$ {data.totalPrice}</span>
            </InfoCSS>
          </BoxCSS>
        </div>
      </ContainerCSS>
      <Table columns={columnsMemo} data={dataMemo} updateMyData={updateMyData} />
    </>
  );
}

export default FormOrder;