import React, { useEffect, useState } from 'react';

const EmployeeList = (props) => {
  const [employees, setEmployees] = useState([]);
 
  // Fetch employee data
 
      function fetchEmployees() {
        fetch("https://employeeserver-y3px.onrender.com/employees")
          .then((response) => {
            if (!response.ok) {
              throw new Error('Unexpected server response');
            }
            return response.json();
          })
          .then((data) => {
            setEmployees(data);
          })
          .catch((error) => console.log("Error:", error));
      }
      

  // Handle delete operation
  const handleDelete = (employeeId) => {
    // Confirm the deletion
    if (window.confirm("Are you sure you want to delete this employee?")) {
      // Send DELETE request to the API
      fetch(`https://employeeserver-y3px.onrender.com/employees/${employeeId}`, {
        method: "DELETE",
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unexpected server response');
        }
        // Update UI after deletion
        setEmployees(employees.filter(employee => employee.id !== employeeId));
        console.log("Employee deleted");
      })
      .catch((error) => console.log("Error:", error));
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleEdit = (employee) => {
    props.showForm(employee);  // Pass the selected employee to the form
  };

  return (
    <>
      <h2 className="text-center mb-3">List of Employees</h2>
      <button onClick={() => props.showForm()} type="button" className="btn btn-primary me-2 mb-5 ">
        Create
      </button>
      <button onClick={() => fetchEmployees()} type="button" className="btn btn-warning me-2 mb-5 ">
        Refresh
      </button>

      <table className='table  table-bordered table-dark'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th> {/* Actions column */} 
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.username}</td> 
              <td>{employee.email}</td>
              <td>{employee.status}</td>
              <td style={{ width:"10px", whiteSpace:"nowrap" }}>
                <button type='button' className='btn btn-primary btn-sm me-2' onClick={() => handleEdit(employee)}>Edit</button>
                <button type='button' className='btn btn-danger btn-sm' onClick={() => handleDelete(employee.id)}>Delete</button> {/* Added onClick for delete */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeList;
