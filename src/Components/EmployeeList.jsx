import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  // Replace with actual employee data fetching and state management
  const employees = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Mike Johnson' },
  ];

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            <Link to={`/employee/${employee.id}`}>{employee.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add">Add Employee</Link>
    </div>
  );
};

export default EmployeeList;