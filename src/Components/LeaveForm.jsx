import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import employeeServices from "../services/employeeServices";

const LeaveForm = () => {
  const [action, setAction] = useState("");
  const [employee, setEmployee] = useState("");
  const [ leaveType, setLeaveType] = useState("");
  const [ startDate, setStartDate] = useState("");
  const [ endDate, setEndDate] = useState("");
  const [ reason, setReason] = useState("");

  const navigate = useNavigate();

  // Replace with actual form logic for adding/editing employee
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission

    employeeServices
      .leave(action, employee, leaveType,startDate,endDate,reason)
      .then((res) => {
        alert("Successfully submitted");

        // clear the form
        setAction("");
        setEmployee("");
        setLeaveType("");
        setStartDate("");
        setEndDate("");
        setReason("");

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
      <h2>Leave Application</h2>
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
          <label>LeaveType:</label>
          <input
            type="text"
            name="leaveType"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
          />
          <br />
          <br />
        </div>
        <div>
          <label>StartDate:</label>
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <br />
          <br />
        </div>
        <div>
          <label>EndDate:</label>
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <br />
          <br />
        </div>
        <div>
          <label>Reason:</label>
          <input
            type="text"
            name="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
          <br />
          <br />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default LeaveForm;
