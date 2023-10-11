import { useState } from "react";

import Table from "./Components/Table";
import Header from "./Components/Header";
import Modal from "./Components/Modal";

import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const [rows, setRows] = useState([
    {
      date: " 10-4-2023",
      company: "Etsy",
      position: "Software Engineer",
      link: "https://www.etsy.com",
      status: "applied",
      notes: "lorem ipsom",
    },
    {
      date: " 10-5-2023",
      company: "Kick Starter",
      position: "Software Engineer 1",
      link: "https://www.kickstarter.com",
      status: "in-progress",
      notes: "lorem ipsomTest",
    },
  ]);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, index) => index !== targetIndex));
  };

  const handleEditRow = (index) => {
    setRowToEdit(index);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, index) => {
            if (index !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div>
      <div className="App">
        <Header />
        <Table
          rows={rows}
          deleteRow={handleDeleteRow}
          editRow={handleEditRow}
        />
        <button className="btn" onClick={() => setModalOpen(true)}>
          Add
        </button>
        {modalOpen && (
          <Modal
            closeModal={() => {
              setModalOpen(false);
              setRowToEdit(null);
            }}
            onSubmit={handleSubmit}
            defaultValue={rowToEdit !== null && rows[rowToEdit]}
          />
        )}
      </div>
    </div>
  );
}

export default App;
