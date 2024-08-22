import React, { useState } from "react";
import { Link } from "react-router-dom";

function ADMINdept({
  title,
  tableHead,
  tableData,
  filterName,
  placeholder,
  handleFilterByName,
  handleRequestSort,
  handleSelectAllClick,
  handleClick,
  actionElements,
  filteredData,
  page,
  rowsPerPage,
  setOpen,
  open,
  emptyRows,
  isDataNotFound,
  handleChangePage,
  handleChangeRowsPerPage,
}) {
  const [selected, setSelected] = useState([]);

  return (
    <div className="p-4">
      <div className="mb-5 flex justify-between items-center">
        <h4 className="text-xl font-bold">{title}</h4>
        <div className="flex items-center space-x-2">
          <button
            className="ml-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => setOpen(!open)}
          >
            New {title}
          </button>
          {/* Replace with your modal component */}
        </div>
      </div>

      <div className="bg-white shadow rounded">
        {/* Replace with your toolbar component */}
        <div className="p-4">
          {/* Placeholder for Toolbar */}
          <input
            type="text"
            placeholder={placeholder}
            value={filterName}
            onChange={handleFilterByName}
            className="border p-2 rounded w-full"
          />
        </div>

        <div className="overflow-auto">
          <table className="min-w-full divide-y divide-gray-200 table-auto">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    onChange={handleSelectAllClick}
                    checked={selected.length === tableData.length}
                  />
                </th>
                {tableHead.map((data) => (
                  <th
                    key={data.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {data.label}
                  </th>
                ))}
                <th className="px-6 py-3 text-right"></th>
              </tr>
            </thead>
            <tbody>
              {filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  const { recid, usrname } = row;
                  const isItemSelected = selected.indexOf(usrname) !== -1;

                  return (
                    <tr
                      key={recid}
                      className={`hover:bg-gray-100 ${
                        isItemSelected ? "bg-gray-200" : ""
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          checked={isItemSelected}
                          onChange={(event) => handleClick(event, usrname)}
                        />
                      </td>
                      {tableHead.map((data) => (
                        <td
                          key={data.id}
                          className="px-6 py-4 whitespace-nowrap"
                        >
                          {row[data.id]}
                        </td>
                      ))}
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {/* Replace with your dynamic menu component */}
                        <button className="text-blue-600 hover:text-blue-900">
                          Actions
                        </button>
                      </td>
                    </tr>
                  );
                })}
              {emptyRows > 0 && (
                <tr style={{ height: 53 * emptyRows }}>
                  <td colSpan={6}></td>
                </tr>
              )}
            </tbody>
            {isDataNotFound && (
              <tbody>
                <tr>
                  <td
                    className="px-6 py-3 text-center text-gray-500"
                    colSpan={6}
                  >
                    {/* Replace with your search not found component */}
                    No data found
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>

        <div className="py-3">
          {/* Replace with your pagination component */}
          <div className="flex justify-between">
            <p>Page {page + 1}</p>
            <div>
              <button
                onClick={handleChangePage}
                className="mr-2 bg-gray-300 p-2 rounded"
              >
                Previous
              </button>
              <button
                onClick={handleChangePage}
                className="bg-gray-300 p-2 rounded"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ADMINdept;
