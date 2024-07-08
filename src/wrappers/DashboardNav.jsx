import React, { useState } from "react";
import { Link,} from "react-router-dom";


const DashboardNav = ({ employees, onSubmitLeave, onSubmitAttendance }) => {
  const [action, setAction] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [isPresent, setIsPresent] = useState(true); // Defaulting to present

  const handleSubmit = (e) => {
    e.preventDefault();

    if (action === "leave") {
      const newLeaveApplication = {
        employeeId,
        leaveType,
        startDate,
        endDate,
        reason,
      };
      onSubmitLeave(newLeaveApplication);
    } else if (action === "attendance") {
      const attendanceRecord = {
        employeeId,
        date,
        isPresent,
      };
      onSubmitAttendance(attendanceRecord);
    }

    // Clear form fields after submission
    setAction("");
    setEmployeeId("");
    setLeaveType("");
    setStartDate("");
    setEndDate("");
    setReason("");
    setDate("");
    setIsPresent(true);
  };

  return (
    <div>
      <h2>Employee Management Form</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Action:
            <select value={action} onChange={(e) => setAction(e.target.value)}>
              <option value="">Select Action</option>
              <option value="leave">Apply for Leave</option>
              <option value="attendance">Mark Attendance</option>
            </select>
          </label>
        </div>
        <br />
        <div>
          <label>
            Employee:
          </label>
          <input type="text" placeholder="employee id" />
        </div>
        <br />

        {action === "leave" && (
          <>
            <label>
              Leave Type:
              <input
                type="text"
                value={leaveType}
                onChange={(e) => setLeaveType(e.target.value)}
              />
            </label><br /><br />
            <label>
              Start Date:
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </label>
            <label>
              End Date:
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </label><br /><br />
            <label>
              Reason:
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </label>
          </>
        )}

        {action === "attendance" && (
          <>
            <label>
              Date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <label>
              Present:
              <input
                type="checkbox"
                checked={isPresent}
                onChange={(e) => setIsPresent(e.target.checked)}
              />
            </label>
          </>
        )}
<br /><br />
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default DashboardNav; 
