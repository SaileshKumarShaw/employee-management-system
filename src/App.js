import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
import NewEmployee from "./components/NewEmployee";
import Employee from "./components/Employee";
import { Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  toast.configure({
    autoClose: 1000,
    draggable: false
  });
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header pageTitle="Employee Management System" />
      <Route path="/employee/:id" component={Employee}></Route>
      <Route path="/employees" exact component={EmployeeList}></Route>
      <Route path="/addEmployee" exact component={NewEmployee}></Route>
      <Route path="/home" exact component={HomePage}></Route>
    </div>
  );
}

export default App;
