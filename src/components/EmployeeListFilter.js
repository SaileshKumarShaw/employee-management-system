import React from "react";

function EmployeeListFilter(props) {
  return (
    <>
      <div className="form-group">
        <label htmlFor="filterString">Enter Employee Name to Filter</label>
        <input
          type="text"
          className="form-control"
          id="filterString"
          value={props.filterString || ""}
          onChange={props.onFilterStringChange}
        />
      </div>
      <p className="lead">Filtered By: {props.filterString}</p>
    </>
  );
}

export default EmployeeListFilter;
