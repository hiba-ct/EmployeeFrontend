
import React, { useState, useEffect } from 'react';

function EmployeeForm(props) {
  const [errorMessage, setErrorMessage] = useState("");

  // Set employee data state
  const [employee, setEmployee] = useState({
    id: '',
    name: '',
    username: '',
    email: '',
    status: 'Active', // Default value
  });

  useEffect(() => {
    // If there is an employee being edited, set the form values
    if (props.employee) {
      setEmployee(props.employee);
    }
  }, [props.employee]);

  function handleSubmit(event) {
    event.preventDefault();

    // Form validation
    if (!employee.name || !employee.username || !employee.id || !employee.email || !employee.status) {
      setErrorMessage(
        <div className='alert alert-warning' role="alert">
          Please provide all the required fields!
        </div>
      );
      return;
    }

    // Determine if we are editing or creating a new employee
    if (props.employee) {
      // Update the employee
      fetch(`http://localhost:8000/employees/${employee.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unexpected server response');
        }
        return response.json();
      })
      .then((data) => {
        console.log("Employee updated:", data);
        props.showList();
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    } else {
      // Add a new employee
      employee.createdAt = new Date().toISOString().slice(0, 10);
      fetch("http://localhost:8000/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unexpected server response');
        }
        return response.json();
      })
      .then((data) => {
        console.log("Employee added:", data);
        props.showList();
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    }
  }

  return (
    <>
      <h2 className='text-center mb-3'>{props.employee ? 'Edit Employee' : 'Add New Employee'}</h2>
      <div className='row'>
        <div className='col-lg-6 mx-auto'>
          {errorMessage}
          <form onSubmit={handleSubmit}>
            <div className='row mb-3'>
              <label className='col-sm-4 col-form-label'>Id</label>
              <div className='col-sm-8'>
                <input className='form-control' name="id" value={employee.id} onChange={(e) => setEmployee({...employee, id: e.target.value})} required />
              </div>
            </div>
            <div className='row mb-3'>
              <label className='col-sm-4 col-form-label'>Name</label>
              <div className='col-sm-8'>
                <input className='form-control' name="name" value={employee.name} onChange={(e) => setEmployee({...employee, name: e.target.value})} required />
              </div>
            </div>
            <div className='row mb-3'>
              <label className='col-sm-4 col-form-label'>UserName</label>
              <div className='col-sm-8'>
                <input className='form-control' name="username" value={employee.username} onChange={(e) => setEmployee({...employee, username: e.target.value})} required />
              </div>
            </div>
            <div className='row mb-3'>
              <label className='col-sm-4 col-form-label'>Email</label>
              <div className='col-sm-8'>
                <input className='form-control' name="email" value={employee.email} onChange={(e) => setEmployee({...employee, email: e.target.value})} required />
              </div>
            </div>
            <div className='row mb-3'>
              <label className='col-sm-4 col-form-label'>Status</label>
              <div className='col-sm-8'>
                <select className='form-select' name="status" value={employee.status} onChange={(e) => setEmployee({...employee, status: e.target.value})}>
                  <option value="Active">Active</option>
                  <option value="InActive">InActive</option>
                </select>
              </div>
            </div>
            <div className='row'>
              <div className='offset-sm-4 col-sm-4 d-grid'>
                <button type="submit" className='btn btn-primary btn-sm me-3'>Save</button>
              </div>
              <div className='col-sm-4 d-grid'>
                <button onClick={() => props.showList()} type="button" className='btn btn-success me-2'>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EmployeeForm;
