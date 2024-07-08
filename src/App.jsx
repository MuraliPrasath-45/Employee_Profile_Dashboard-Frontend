import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeNav from "./wrappers/HomeNav";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import DashboardNav from "./wrappers/DashboardNav";
import EmployeeForm from "./Components/EmployeeForm";
import EmployeeDetail from './Components/EmployeeDetail';
import EmployeeList from "./Components/EmployeeList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeNav />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardNav />,
  },
  {
    path: "list",
    element: <EmployeeList />,
  },
  {
    path: "add",
    element: <EmployeeForm />,
  },
  {
    path: "employee/:id",
    element: <EmployeeDetail />,
  },
  {
    path: "edit/:id",
    element: <EmployeeForm />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
