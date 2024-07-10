import AttendanceForm from "../Components/AttendanceForm";
import { instance, protectedInstance } from "./instance";

// define the employee services
const employeeServices = {
  add: async (name, position, salary) => {
    return await instance.post("/employees", {
      name,
      position,
      salary,
    });
  },
  attendance: async (action, employee, date, reason) => {
    return await instance.post("/employees/attendance", {
      action,
      employee,
      date,
      reason,
    });
  },
 leave: async (
    action,
    employee,
    leaveType,
    startDate,
    endDate,
    reason
  ) => {
    return await instance.post("/employees/leave", {
      action,
      employee,
      leaveType,
      startDate,
      endDate,
      reason,
    });
  },
  getEmployees: async () => {
    return await instance.get("/employees");
  },
};

// export the employee services
export default employeeServices;
