import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const HomeNav = () => {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6"><br />
        <h2 className="mb-2 mt-0 text-4xl font-medium leading-tight text-primary">
          Employee Profile Management System 
        </h2><br />
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/register"
              >
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Employee Dashboard
              </Link>
            </li>
          </ul>
          </div>
        <NavLink
          className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3 btn btn-primary"
          to="/add"
        >
          Create Employee
        </NavLink>
        
      </nav>
      <Outlet />
      <div className="bg-sky-200 ...">
            <img
              src="https://i.ibb.co/0cMzXsp/png-clipart-human-resource-management-system-time-and-attendance-service-employees-international-uni.png"
            />
          </div>
    </div>
  );
};

export default HomeNav;
