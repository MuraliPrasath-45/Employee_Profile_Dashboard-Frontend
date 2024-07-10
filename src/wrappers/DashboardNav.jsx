import React, { useState } from "react";
import AttendanceForm from "../Components/AttendanceForm";
import LeaveForm from "../Components/LeaveForm";

const DashboardNav = () => {
  return (
    <div>
      <h2>Employee Management Form</h2>
      <br />
      <AttendanceForm/>
      <br />
      <LeaveForm/>
    </div>
  );
};

export default DashboardNav; 
