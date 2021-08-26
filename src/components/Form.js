import React, { useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import isDate from "validator/lib/isDate";

import { showErrorMessage } from "../common/messages";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    dob: "",
    email: "",
    board: "",
    college: "",
    gpa: "",
    company: "",
    role: "",
    years: "",
    education: [],
    experience: [],
  });
  const [errors, setErrors] = useState("");
  const { name, dob, email, board, college, gpa, company, role, years } = data;
  const handleFormData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setErrors("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("email is", data.email);
    if (
       isEmpty(name)||
      isEmpty(dob) ||
      isEmpty(email) ||
      isEmpty(board) ||
      isEmpty(college) ||
      isEmpty(gpa) ||
      isEmpty(role) ||
      isEmpty(years) ||
      isEmpty(company)
    ) {
      setErrors("All fields required");
    }
    else if (!isEmail(email)) {
      setErrors("Email must be valid")
    }
    else if(!isDate(dob)){
      setErrors('Date of Birth must be valid')
    }
    else{
      //success
      //Send to backend
      console.log("Data is ", data);
    }
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} noValidate>
        <h1 className="text-center">Register</h1>
        {errors && showErrorMessage(errors)}
        <div className="mt-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={data.name}
            onChange={handleFormData}
            required
          />
        </div>
        <div className="mt-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={data.email}
            onChange={handleFormData}
            required
          />
        </div>
        <div className="mt-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={data.dob}
            onChange={handleFormData}
            required
          />
        </div>
        <h6 className="mt-2"> Education Details</h6>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Board</th>
              <th scope="col">College</th>
              <th scope="col">GPA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <input
                  type="text"
                  name="board"
                  value={data.board}
                  onChange={handleFormData}
                  placeholder="Board"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="college"
                  value={data.college}
                  onChange={handleFormData}
                  placeholder="College"
                />
              </td>
              <td>
                <input
                  type="number"
                  name="gpa"
                  value={data.gpa}
                  onChange={handleFormData}
                  placeholder="GPA"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <h6 className="mt-2"> Experience</h6>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Company</th>
              <th scope="col">Role</th>
              <th scope="col">Years</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <input
                  type="text"
                  name="company"
                  value={data.company}
                  onChange={handleFormData}
                  placeholder="Company"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="role"
                  value={data.role}
                  onChange={handleFormData}
                  placeholder="Role"
                />
              </td>
              <td>
                <input
                  type="number"
                  name="years"
                  value={data.years}
                  onChange={handleFormData}
                  placeholder="Years"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-2">
          <button type="submit" className="btn btn-primary">
            {" "}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
