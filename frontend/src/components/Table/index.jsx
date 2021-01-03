import { useTable } from 'react-table';
import { ContainerCSS, TableContainerCSS, TableCSS, CellCSS, CellBodyCSS, RowCSS } from './styles';

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <ContainerCSS>
      <TableContainerCSS {...getTableProps()}>
        <TableCSS>
          <thead>
            {headerGroups.map(headerGroup => (
              <RowCSS {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <CellCSS {...column.getHeaderProps()}>{column.render('Header')}</CellCSS>
                  ))}
              </RowCSS>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <RowCSS {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <CellBodyCSS {...cell.getCellProps()}>{cell.render('Cell')}</CellBodyCSS>
                  })}
                </RowCSS>
              )
            })}
          </tbody>
        </TableCSS>
      </TableContainerCSS>
    </ContainerCSS>
  );
}

export default Table;