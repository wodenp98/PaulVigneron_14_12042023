import React, { useMemo, useEffect } from "react";
import { useTable, useSortBy } from "react-table";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee, fetchEmployees } from "../features/thunk";

const Table = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleDelete = (row) => {
    const employee = row.original;
    dispatch(deleteEmployee(employee));
  };
  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Start Date",
        accessor: "startDate",
      },
      {
        Header: "Department",
        accessor: "department",
      },
      {
        Header: "Date of Birth",
        accessor: "birthDate",
      },
      {
        Header: "Street",
        accessor: "street",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Zip Code",
        accessor: "zipcode",
      },
      {
        Header: "",
        accessor: "",
        id: "hiddenColumn",
        hidden: true,
      },
    ],
    []
  );

  const data = useMemo(() => employees, [employees]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  return (
    <div className="overflow-x-auto  w-full h-full flex-col sm:flex-row ">
      <div className="sm:overflow-x-auto">
        <table
          {...getTableProps()}
          className="table-auto w-full divide-y divide-gray-200"
        >
          <thead className="bg-gray-200">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="px-4 py-2 font-bold text-left cursor-pointer text-sm md:text-base"
                  >
                    {column.render("Header")}
                    <span className="ml-1">
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
                <th className="px-4 py-2 font-bold text-left"></th>
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="bg-white divide-y divide-gray-200"
          >
            {rows.length === 0 ? (
              <tr>
                <td
                  colSpan={headerGroups[0].headers.length + 1}
                  className="text-center py-4"
                >
                  No data available
                </td>
              </tr>
            ) : (
              rows.map((row, rowIndex) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className={rowIndex % 2 === 0 ? "bg-gray-100" : ""}
                  >
                    {row.cells.map((cell, cellIndex) => (
                      <td
                        {...cell.getCellProps()}
                        className={`px-4 py-2 text-sm md:text-base`}
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleDelete(row)}
                        id="delete-employee"
                        aria-label="Delete an employee"
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-sm md:text-base"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
