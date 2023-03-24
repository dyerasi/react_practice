import { Fragment } from "react";
//fragment allows to wrap children without actually adding
//any more jsx elements
//think of it like empty wrapper with no side effects
//avoids issues of no divs in tables

function Table({ data, config, keyFn }) {
  const rendered_rows = data.map((entry) => {
    const rendered_cells = config.map((c) => (
      <td className="p-3" key={c.label}>
        {c.render(entry)}
      </td>
    ));

    return (
      <tr className="border-b" key={keyFn(entry)}>
        {rendered_cells}
      </tr>
    );
  });

  const rendered_headers = config.map((col) => {
    if (col.header) {
      return <Fragment key={col.label}>{col.header()}</Fragment>;
    }
    return <th key={col.label}>{col.label}</th>;
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{rendered_headers}</tr>
      </thead>
      <tbody>{rendered_rows}</tbody>
    </table>
  );
}

export default Table;
