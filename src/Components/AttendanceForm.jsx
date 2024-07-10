import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import employeeServices from "../services/employeeServices";

const AttendanceForm = () => {
  const { id } = useParams();
  const [action, setAction] = useState("");
  const [employee, setEmployee] = useState("");
  const [date, setDate] = useState("");
  const [present, setPresent] = useState("");


  const navigate = useNavigate();

  // Replace with actual form logic for adding/editing employee
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission

    employeeServices
      .attendance(action, employee, date,present)
      .then((res) => {
        alert("Successfully submitted");

        // clear the form
        setAction("");
        setEmployee("");
        setDate("");
        setPresent("");

        // redirect to dashboard page
        setTimeout(() => {
          navigate("/dashboard");
        }, 500);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div>
      <h2>Attendance Application</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Action:</label>
          <input
            type="text"
            name="action"
            value={action}
            onChange={(e) => setAction(e.target.value)}
          />
          <br />
          <br />
        </div>
        <div>
          <label>Employee:</label>
          <input
            type="text"
            name="employee"
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
          />
          <br />
          <br />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <br />
        </div>
        <div>
          <label>Present:</label>
          <input
            type="text"
            name="present"
            value={present}
            onChange={(e) => setPresent(e.target.value)}
          />
          <br />
          <br />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AttendanceForm;
