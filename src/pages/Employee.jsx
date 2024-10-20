
 import React, { useState } from 'react';
import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';


const Employee = () => {
    const [content, setContent] = useState(<EmployeeList showForm={showForm} />);

    function showList() {
        setContent(<EmployeeList showForm={showForm} />);
    }

    function showForm(employee = null) {  // Accept employee parameter
        setContent(<EmployeeForm showList={showList} employee={employee} />);  // Pass employee to form
    }
    return (
        <div className='container my-5'>
            {content}
        </div>
       
    );
  
}

export default Employee; 
