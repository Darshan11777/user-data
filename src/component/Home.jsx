
import React, { useState, useEffect } from "react";
import Form from "./Form";
import nanoid from "nano-id";
import Table from "./Table";

export default function Home() {
  // Initialize the list of employees with some sample data
  const initialEmployees = [
    {
      id: nanoid(),
      userName: "Andrew45",
      name: "Andrew Clark",
    },
    {
      id: nanoid(),
      userName: "Tassinari",
      name: "Olivier Tassinari",
    },
    {
      id: nanoid(),
      userName: "Jack551",
      name: "Michael Jackson",
    },
  ];

  const [employees, setEmployees] = useState(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees"));
    return storedEmployees && storedEmployees.length >= 1 ? storedEmployees : initialEmployees;
  });

  // State for tracking the currently selected employee ID for editing
  const [editId, setEditId] = useState(false);

  // Function to handle deleting an employee
  const deleteEmployee = (id) => {
    setEmployees((prev) => prev.filter((employee) => employee.id !== id));
  };

  // Function to handle setting the employee ID for editing
  const editEmployee = (id) => {
    setEditId(id);
  };

  // Use Effect to save the state of employees to localStorage
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);




  return (
    <div className="container">
      <div className="listItem">
        <Form
          setEmployees={setEmployees}
          id={nanoid}
          editId={editId}
          editEmployee={editEmployee}
          employees={employees}
        />

      </div>

      <Table 
       employees={employees} 
       editEmployee={editEmployee} 
       deleteEmployee={deleteEmployee} 
      />
    </div>
  );
}