const getTotalGridDimensions = rows => {
  const totalColSpan = rows[0].columns.reduce(
    (acc, col) => acc + col.layout.colspan,
    0,
  )

  return { totalColSpan }
}

const Table = ({
  cellComponent,
  children,
  rows,
  totalColSpan = 4,
  ...props
}) => {
  const CellComponent = cellComponent

  return (
    <table className="crystallize-grid crystallize-grid--table" {...props}>
      <thead>
        <tr>
          {new Array(totalColSpan).fill(0).map((v, i) => (
            <th key={`th-${i}`} />
          ))}
        </tr>
      </thead>
      <tbody>
        {children
          ? children({ rows, totalColSpan })
          : rows.map((row, i) => {
              return (
                <tr key={`row-${i}`}>
                  {row.columns.map((col, j) => (
                    <td
                      key={`cell-${i}-${j}`}
                      className="crystallize-grid__cell"
                      rowSpan={col.layout.rowspan}
                      colSpan={col.layout.colspan}
                    >
                      <CellComponent cell={col} totalColSpan={totalColSpan} />
                    </td>
                  ))}
                </tr>
              )
            })}
      </tbody>
    </table>
  )
}

export const Grid = ({
  cellComponent,
  children,
  model,
  type = 'grid',
  ...props
}) => {
  if (!cellComponent && !children) {
    console.error(
      '@crystallize/grid-renderer: missing ´cellComponent` or children function',
    )
    return null
  }

  const { rows } = model
  if (!rows.length) return null

  const { totalColSpan } = getTotalGridDimensions(rows)

  if (type === 'table') {
    return (
      <Table
        cellComponent={cellComponent}
        rows={rows}
        totalColSpan={totalColSpan}
        {...props}
      >
        {children}
      </Table>
    )
  }

  // Currently the data is only returned in a nested array of rows and
  // columns. To make use of CSS Grid we need a flat array of all of the
  // individual cells.
  const columns = rows.map(row => row.columns)
  const cells = [].concat.apply([], columns)

  return (
    <CSSGrid
      cellComponent={cellComponent}
      cells={cells}
      totalColSpan={totalColSpan}
      {...props}
    >
      {children}
    </CSSGrid>
  )
}

const CSSGrid = ({
  cellComponent,
  cells,
  children,
  totalColSpan = 4,
  ...props
}) => {
  const CellComponent = cellComponent

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${totalColSpan}, 1fr)`,
      }}
      className="crystallize-grid crystallize-grid--css-grid"
      {...props}
    >
      {children
        ? children({ cells, totalColSpan })
        : cells.map((cell, i) => (
            <div
              key={`cell-${i}`}
              className="crystallize-grid__cell"
              style={{
                gridColumn: `span ${cell.layout.colspan}`,
                gridRow: `span ${cell.layout.rowspan}`,
              }}
            >
              <CellComponent cell={cell} totalColSpan={totalColSpan} />
            </div>
          ))}
    </div>
  )
}
