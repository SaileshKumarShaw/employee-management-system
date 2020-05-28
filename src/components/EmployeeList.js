import React, { useState, useEffect } from "react";
import { getEmployees, deleteEmployee } from "../services/EmployeeService";
import { Link } from "react-router-dom";
import EmployeeListFilter from "./EmployeeListFilter";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EmployeeList(props) {
  const [employees, setEmployees] = useState([]);
  const [filterString, setFilterString] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([...employees]);

  function onFilterStringChange(event) {
    setFilterString(event.target.value);
  }

  useEffect(() => {
    getEmployees().then(_employees => {
      setEmployees(_employees);
      return () => {
        const abortController = new AbortController();
        abortController.abort();
      };
    });
  }, []);

  useEffect(() => {
    setFilteredEmployees([...employees]);
    if (filterString) {
      setFilteredEmployees(
        employees.filter(employee => {
          return employee.employeeName
            .toLowerCase()
            .includes(filterString.toLowerCase());
        })
      );
    }
  }, [filterString, employees]);

  function handleDelete(employeeId) {
    console.log(employeeId);
    deleteEmployee(employeeId).then(response => {
      console.log(employeeId);
      toast.error("Employee Deleted with " + employeeId, {
        position: toast.POSITION.TOP_RIGHT
      });
    });
  }

  let deleteButtonStyle = {
    position: "relative",
    backgroundColor: "rgb(255, 77, 77)"
  };

  return (
    <div className="container-fluid">
      <div className="card">
        <div className="card-header">
          <EmployeeListFilter
            filterString={filterString}
            onFilterStringChange={onFilterStringChange}
          />
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">SL</th>
                <th scope="col">Employee ID</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Designation</th>
                <th scope="col">Department</th>
                <th scope="col">Salary</th>
                <th scope="col">Rating</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee, index) => (
                <tr key={employee.employeeId}>
                  <th scope="row">{index}</th>
                  <td>
                    <Link to={{ pathname: `/employee/${employee.employeeId}` }}>
                      {employee.employeeId}
                    </Link>
                  </td>
                  <td>{employee.employeeName}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.department}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.rating}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={deleteButtonStyle}
                      onClick={event => {
                        event.preventDefault();
                        handleDelete(employee.employeeId);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer"></div>
      </div>
    </div>
  );
}

export default EmployeeList;
