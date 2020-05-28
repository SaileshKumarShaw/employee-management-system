import React, { useState, useEffect } from "react";
import { getEmployee, saveEmployee } from "../services/EmployeeService";
import bgcolors from "../utils/BgColors";
import TextInput from "./TextInput";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Employee(props) {
  const [employee, setEmployee] = useState({
    employeeId: null,
    employeeName: "",
    designation: "",
    department: "",
    salary: null
  });

  useEffect(() => {
    getEmployee(props.match.params.id).then(_employee => {
      setEmployee(_employee);
      return () => {
        const abortController = new AbortController();
        abortController.abort();
      };
    });
  }, [props.match.params.id]);

  let inputTextStyle = {
    size: "20",
    border: "none",
    borderBottom: "1px solid white"
  };

  function handleChange(event) {
    setEmployee({
      ...employee,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    saveEmployee(employee).then(response => {
      console.log(employee);
      toast.success("Employee Updated with " + employee.employeeId, {
        position: toast.POSITION.TOP_RIGHT
      });
    });
  }

  let saveButtonStyle = {
    position: "relative",
    left: "38%",
    width: "10%",
    backgroundColor: "rgb(28, 126, 28)"
  };

  return (
    <>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h3 align="center" style={{ color: bgcolors.DodgerBlue }}>
              {employee.employeeName}
            </h3>
          </div>
          <div className="card-body">
            <form>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Employee Name</td>
                    <td>
                      <TextInput
                        id="employeeName"
                        label="Employee Name"
                        name="employeeName"
                        value={employee.employeeName}
                        onChange={handleChange}
                        Boxstyle={inputTextStyle}
                      ></TextInput>
                    </td>
                  </tr>
                  <tr>
                    <td>Designation</td>
                    <td>
                      <TextInput
                        id="designation"
                        label="Designation"
                        name="designation"
                        value={employee.designation}
                        onChange={handleChange}
                        Boxstyle={inputTextStyle}
                      ></TextInput>
                    </td>
                  </tr>
                  <tr>
                    <td>Department</td>
                    <td>
                      <TextInput
                        id="department"
                        label="department"
                        name="department"
                        value={employee.department}
                        onChange={handleChange}
                        Boxstyle={inputTextStyle}
                      ></TextInput>
                    </td>
                  </tr>
                  <tr>
                    <td>Salary</td>
                    <td>
                      <TextInput
                        id="salary"
                        label="salary"
                        name="salary"
                        value={employee.salary}
                        onChange={handleChange}
                        Boxstyle={inputTextStyle}
                      ></TextInput>
                    </td>
                  </tr>
                  <tr>
                    <td>Rating</td>
                    <td>
                      <TextInput
                        id="rating"
                        label="Rating"
                        name="rating"
                        value={employee.rating}
                        onChange={handleChange}
                        Boxstyle={inputTextStyle}
                      ></TextInput>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
          <div className="card-footer">
            <button className="btn btn-outline-secondary">
              <i className="fa fa-chevron-left"></i> Back
            </button>
            <button
              type="button"
              className="btn btn-primary"
              style={saveButtonStyle}
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employee;
