import React, { useState } from "react";
import TextInput from "./TextInput";
import bgcolors from "../utils/BgColors";
import { saveEmployee } from "../services/EmployeeService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewEmployee(props) {
  const [employee, setEmployee] = useState({
    employeeId: null,
    employeeName: "",
    designation: "",
    department: "",
    salary: null
  });

  let saveButtonStyle = {
    position: "relative",
    left: "38%",
    width: "10%",
    backgroundColor: "rgb(28, 126, 28)"
  };

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
    saveEmployee(employee).then(response =>
      toast.success("Employee Created with " + employee.employeeId, {
        position: toast.POSITION.TOP_RIGHT
      })
    );
  }

  return (
    <>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h3 align="center" style={{ color: bgcolors.DodgerBlue }}>
              Add New Employee
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

export default NewEmployee;
