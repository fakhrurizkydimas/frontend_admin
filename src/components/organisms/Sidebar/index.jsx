import MetisMenu from "@metismenu/react";
import "metismenujs/dist/metismenujs.css";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <MetisMenu>
        <li className="menu-lists">
          <Link to="/add" className="">Add</Link>
        </li>
        <li className="menu-lists">
          <Link to="/Edit" className="">Edit</Link>
        </li>
        <li className="menu-lists">
          <Link to="#" className="">Delete</Link>
        </li>
        <li className="menu-lists">
          <Link to="#" className="">Download Report</Link>
        </li>
      </MetisMenu>
    </>
  );
};

export default Sidebar;
