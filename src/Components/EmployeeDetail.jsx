import React from 'react';
import { useParams, Link } from 'react-router-dom';

const EmployeeDetail = () => {
  const { id } = useParams();

  // Replace with actual employee fetching based on id
  const employee = { id: id, name: 'John Doe', position: 'Developer', salary: 50000 };

  return (
    <div>
      <h2>Employee Detail</h2>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Position:</strong> {employee.position}</p>
      <p><strong>Salary:</strong> ${employee.salary}</p>
      <Link to={`/edit/${employee.id}`}>Edit Employee</Link>
    </div>
  );
};

export default EmployeeDetail;
