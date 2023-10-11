import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Table.css";

const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Company Name</th>
            <th className="expand">Position Title</th>
            <th>Job Posting Link</th>
            <th>Status</th>

            <th className="expand">Notes</th>
            <th className="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const statusText =
              row.status.charAt(0).toUpperCase() + row.status.slice(1);
            return (
              <tr key={index}>
                <td>{row.date}</td>
                <td>{row.company}</td>
                <td className="title expand">{row.position}</td>
                <td>
                  <span>
                    <a
                      href={row.link}
                      alt="website of company"
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      {row.company}
                    </a>
                  </span>
                </td>
                <td>
                  <span className={`label label-${row.status}`}>
                    {statusText}
                  </span>
                </td>
                <td>{row.notes}</td>
                <td>
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(index)}
                    />
                    <BsFillPencilFill
                      className="pencil"
                      onClick={() => editRow(index)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
