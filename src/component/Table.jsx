
export default function Table({ employees, editEmployee, deleteEmployee }) {
    
    // renderEmployeeRows Function to render the list of employees as table rows
    const renderEmployeeRows = () => {
      return employees.map((employee) => (
        <tr key={employee.id}>
          <td scope="row">{employee.name}</td>
  
          <td>{employee.userName}</td>
  
          <td>
            <button
              onClick={() => {
                editEmployee(employee.id);
              }}
              className="btn btn-c min"
            >
              Edit
            </button>
  
            <button
              onClick={() => deleteEmployee(employee.id)}
              className="btn btn-c min"
            >
              Delete
            </button>
          </td>
        </tr>
      ));
    };
  
    return (
      <div className="tableContainer">
        <h2>View users</h2>
        <table className="table">
          <thead className="fw-bolder">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{renderEmployeeRows()}</tbody>
        </table>
      </div>
    );
  }