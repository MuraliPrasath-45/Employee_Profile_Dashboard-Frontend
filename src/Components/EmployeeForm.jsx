import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import employeeServices from "../services/employeeServices";

const EmployeeForm = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");

  const navigate = useNavigate();

  // Replace with actual form logic for adding/editing employee
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission

    employeeServices
      .add(name, position, salary)
      .then((res) => {
        alert("Successfully added");

        // clear the form
        setName("");
        setPosition("");
        setSalary("");

        // redirect to dashboard page
        setTimeout(() => {
          navigate("/");
        }, 500);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  return (
    <div>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
        </div>
        <div>
          <label>Position:</label>
          <input
            type="text"
            name="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <br />
          <br />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <br />
          <br />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
