import { useMemo } from "react";
import "./Table.css";
import styled from "@emotion/styled";
import users_data from "./users_data.json";
import { useTable } from "react-table";
import { COLUMNS } from "./columns";
const Table = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => users_data, []);
  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableBodyProps, getTableProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <div className="table" style={{ textAlign: "center" }}>
      <h1>Users Table</h1>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
