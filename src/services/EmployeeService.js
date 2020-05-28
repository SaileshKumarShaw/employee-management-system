export function getEmployees() {
  return fetch("http://localhost:3000/employees").then((response) =>
    response.json()
  );
}

export function saveEmployee(employee) {
  return fetch(
    "http://localhost:3000/employees" +
      (employee.employeeId ? "/" + employee.employeeId : ""),
    {
      method: employee.employeeId ? "PUT" : "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(employee),
    }
  ).then((response) => response.json());
}

export function getEmployee(employeeId) {
  return fetch(
    "http://localhost:3000/employees/" + employeeId
  ).then((response) => response.json());
}

export function deleteEmployee(employeeId) {
  return fetch("http://localhost:3000/employees/" + employeeId, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  }).then((response) => {});
}
